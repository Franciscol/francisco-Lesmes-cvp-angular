import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuariosService.listarUsuarios().subscribe(
      (res: Usuario[]) => {
        this.usuarios = res;
      },
      err => console.log(err)
    );
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.usuariosService.eliminarUsuario(id).subscribe(
        response => {
          console.log(response);
          // Actualizar la lista de usuarios
          this.listarUsuarios();
        },
        error => {
          console.log(error);
          // Aquí puedes agregar cualquier acción que desees que ocurra si ocurre un error al eliminar el usuario
        }
      );
    }
  }
  

}
