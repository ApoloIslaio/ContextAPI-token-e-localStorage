import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL_BASE
});


export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: 'Maicon', email: 'josé@gmail.com' }
    };
    // const response = await api.post('/graphql', { token });
    // return response.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: 'Maicon', email: 'josé@gmail.com' },
      token: 'fgdfgadfgadfhgajfkg124'
    };
    // const response = await api.post('/graphql', { email, password });
    // return response.data;
  },
  logout: async () => { 
    return {
      status: true,
    };
    // const response = await api.post('/graphql');
    // return response.data;
  }
})
