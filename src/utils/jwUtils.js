// src/utils/jwtUtils.js
export const isTokenExpired = (token) => {
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decodifica el payload del JWT
      return decodedToken.exp * 1000 < Date.now(); // Verifica si el token ha expirado
    } catch (error) {
      return true; // Si hay un error, considera el token como expirado
    }
  };