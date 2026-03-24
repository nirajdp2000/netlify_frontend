// Base URL for all API calls — set VITE_API_URL in Netlify env vars to point to your Render backend
// e.g. https://stockpulse-backend.onrender.com
export const API_BASE = (import.meta.env.VITE_API_URL as string) || '';
