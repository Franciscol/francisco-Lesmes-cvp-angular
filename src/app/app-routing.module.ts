import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-usuarios', pathMatch: 'full' },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'detalle-usuario/:id', component: DetalleUsuarioComponent },
  { path: 'usuarios/:id', component: DetalleUsuarioComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
