export interface Usuario {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }
  
  export const USUARIO_TEMPORAL: Usuario = {
    id: -1,
    name: '',
    email: '',
    gender: '',
    status: ''
  };
  