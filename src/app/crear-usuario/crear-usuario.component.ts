import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})  
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario = {
    id: -1,
    name: '',
    email: '',
    gender: '',
    status: ''
  };

  emailExistente = false;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  guardarUsuario(): void {
    this.usuariosService.crearUsuario(this.usuario).subscribe(
      response => {
        console.log(response);
        // Aquí puedes agregar cualquier acción que desees que ocurra después de guardar el usuario
        alert('Usuario creado correctamente');
      },
      error => {
        console.log(error);
        // Aquí puedes agregar cualquier acción que desees que ocurra si ocurre un error al guardar el usuario
        alert('Usuario NO creado');
      }
    );
  }

}
