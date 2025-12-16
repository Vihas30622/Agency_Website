/**
 * EmailJS Configuration
 * 
 * This configuration supports dual email sending:
 * 1. Auto-reply to user (templateId)
 * 2. Notification to Buildoholics team (buildoholicsTemplateId)
 */

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '', // Auto-reply template
  buildoholicsTemplateId: import.meta.env.VITE_EMAILJS_BUILDOHOLICS_TEMPLATE_ID || 'template_t0ndauf', // Buildoholics notification template
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};


