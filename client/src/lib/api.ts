import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Scripture APIs
export const scriptureApi = {
  getAll: () => api.get('/scriptures'),
  getById: (id: string) => api.get(`/scriptures/${id}`),
  getByCategory: (category: string) => api.get(`/scriptures/category/${category}`),
  search: (query: string) => api.get(`/scriptures/search?q=${query}`),
};

// Verse APIs
export const verseApi = {
  getByScripture: (scriptureId: string) => api.get(`/verses/scripture/${scriptureId}`),
  getById: (id: string) => api.get(`/verses/${id}`),
  getRandom: () => api.get('/verses/random'),
  search: (query: string) => api.get(`/verses/search?q=${query}`),
};

// AI Chat APIs
export const chatApi = {
  sendMessage: (message: string, context?: string) => 
    api.post('/chat', { message, context }),
  getHistory: () => api.get('/chat/history'),
  clearHistory: () => api.delete('/chat/history'),
};

export default api;
