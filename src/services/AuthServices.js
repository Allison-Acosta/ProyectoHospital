import apiClient from '../apiClient';

export const login = async (username, password) => {
  try {
    const response = await apiClient.post('/login', { username, password });
    const { token, user } = response.data; // Asume que el servidor devuelve un token y datos del usuario
    localStorage.setItem('jwtToken', token); // Almacena el token en localStorage
    localStorage.setItem('user', JSON.stringify(user)); // Almacena los datos del usuario
    return user;
  } catch (error) {
    throw new Error('Error al iniciar sesión');
  }
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('user');
};