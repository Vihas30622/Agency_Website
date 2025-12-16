import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Iridescence from './Iridescence';
<Iridescence
  color={[1, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
/>

createRoot(document.getElementById("root")!).render(<App />);
