import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    DetalleUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
