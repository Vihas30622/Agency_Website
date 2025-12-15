/**
 * FormSubmit Configuration
 * 
 * FormSubmit is a FREE form service - no signup, no API keys needed!
 * It automatically sends emails and supports autoresponders.
 * 
 * Setup (super simple):
 * 1. Just add your email address below
 * 2. That's it! FormSubmit handles everything.
 */

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

