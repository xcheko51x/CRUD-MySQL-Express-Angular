import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

import { UsuarioService } from './shared/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
