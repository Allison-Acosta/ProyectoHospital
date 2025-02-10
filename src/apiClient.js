// src/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://tu-api.com', // URL de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token JWT a las solicitudes
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken'); // Obtén el token JWT del almacenamiento local
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores de autenticación
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token inválido o expirado, redirigir al login
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
