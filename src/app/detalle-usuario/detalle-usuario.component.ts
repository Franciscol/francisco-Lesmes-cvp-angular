import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {

    const idString = this.route.snapshot.paramMap.get('id');
    const id = idString ? +idString : 0; // si idString es nulo, se establece id en 0
    

    this.usuariosService.consultarUsuario(id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
    
  }
}
