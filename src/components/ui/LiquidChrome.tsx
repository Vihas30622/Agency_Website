import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './LiquidChrome.css';

interface LiquidChromeProps {
    baseColor?: [number, number, number];
    speed?: number;
    amplitude?: number;
    frequencyX?: number;
    frequencyY?: number;
    interactive?: boolean;
    className?: string;
}

export const LiquidChrome = ({
    // Default to Electric Cyan [0, 0.9, 1.0] to match theme
    baseColor = [0.0, 0.9, 1.0],
    speed = 0.2,
    amplitude = 0.3,
    frequencyX = 3,
    frequencyY = 3,
    interactive = true,
    className,
    ...props
}: LiquidChromeProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Create renderer
        const renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio, 2)
        });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0); // Transparent backgorund

        const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          for (float i = 1.0; i < 10.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 20.0);
          float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
          uv += (diff / (dist + 0.0001)) * ripple * falloff;

          vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
          return vec4(color, 1.0); // Full opacity for the color itself
      }

      void main() {
          vec4 col = vec4(0.0);
          int samples = 0;
          for (int i = -1; i <= 1; i++){
              for (int j = -1; j <= 1; j++){
                  vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
                  col += renderImage(vUv + offset);
                  samples++;
              }
          }
          gl_FragColor = col / float(samples);
      }
    `;

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: {
                    value: new Float32Array([gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height])
                },
                uBaseColor: { value: new Float32Array(baseColor) },
                uAmplitude: { value: amplitude },
                uFrequencyX: { value: frequencyX },
                uFrequencyY: { value: frequencyY },
                uMouse: { value: new Float32Array([0.5, 0.5]) } // Default center
            },
            transparent: true
        });
        const mesh = new Mesh(gl, { geometry, program });

        function resize() {
            if (!container) return;
            const width = container.offsetWidth;
            const height = container.offsetHeight;

            renderer.setSize(width, height);

            const resUniform = program.uniforms.uResolution.value;
            resUniform[0] = width;
            resUniform[1] = height;
            resUniform[2] = width / height;
        }

        window.addEventListener('resize', resize);
        resize();

        function handleMouseMove(event: MouseEvent | TouchEvent) {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            let clientX, clientY;

            if ('touches' in event) {
                if (event.touches.length > 0) {
                    clientX = event.touches[0].clientX;
                    clientY = event.touches[0].clientY;
                } else {
                    return;
                }
            } else {
                clientX = (event as MouseEvent).clientX;
                clientY = (event as MouseEvent).clientY;
            }

            const x = (clientX - rect.left) / rect.width;
            const y = 1 - (clientY - rect.top) / rect.height;

            const mouseUniform = program.uniforms.uMouse.value;
            // Smooth lerp could be added here, but direct mapping is fine for now
            mouseUniform[0] = x;
            mouseUniform[1] = y;
        }

        if (interactive) {
            // Use window for smoother tracking if dragging, or container for localized
            // Since it's background, maybe window is better or body?
            // Keeping it on container as requested, but might need to pointer-events: auto?
            // Actually, if z-index is 0 and content is above, mouse events might be blocked.
            // We'll attach to window to be safe for "background" interaction.
            window.addEventListener('mousemove', handleMouseMove as any);
            window.addEventListener('touchmove', handleMouseMove as any);
        }

        let animationId: number;
        function update(t: number) {
            animationId = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001 * speed;
            renderer.render({ scene: mesh });
        }
        animationId = requestAnimationFrame(update);

        container.appendChild(gl.canvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            if (interactive) {
                window.removeEventListener('mousemove', handleMouseMove as any);
                window.removeEventListener('touchmove', handleMouseMove as any);
            }
            if (gl.canvas.parentElement) {
                gl.canvas.parentElement.removeChild(gl.canvas);
            }
            // cleanup
            const ext = gl.getExtension('WEBGL_lose_context');
            if (ext) ext.loseContext();
        };
    }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

    // Combine classes including custom class
    return <div ref={containerRef} className={`liquidChrome-container ${className || ''}`} {...props} />;
};
