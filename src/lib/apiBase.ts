// Base URL for all API calls — falls back to Render backend if VITE_API_URL not set
export const API_BASE = (import.meta.env.VITE_API_URL as string) || 'https://backend-render-qyt7.onrender.com';
