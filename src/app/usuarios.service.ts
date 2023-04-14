import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, USUARIO_TEMPORAL } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl = 'https://gorest.co.in/public/v2/users';
  token = '96a6163c00cc7f35b13f76cf5d8efb565d0053ab3bca8d7fec959fd034f63b1c';
  usuarioTemporal: Usuario = USUARIO_TEMPORAL;

  constructor(private http: HttpClient) { }

  setUsuarioTemporal(usuario: Usuario) {
    this.usuarioTemporal = usuario;
  }

  getUsuarioTemporal(): Usuario {
    return this.usuarioTemporal;
  }

  obtenerUsuario(id: number): Observable<any> {
    return this.http.get(`https://gorest.co.in/public/v2/users/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post('https://gorest.co.in/public/v2/users', usuario);
  }

  actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(`https://gorest.co.in/public/v2/users/${usuario.id}`, usuario);
  }



  listarUsuarios(): Observable<Usuario[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Usuario[]>(this.apiUrl, { headers });
  }

  consultarUsuario(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }
}
