import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get<UsuarioModel[]>(this.BASE_URL+'/usuarios');
  }

  obtenerUsuario(id: string) {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/usuarios/${id}`);
  }

  agregarUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/usuarios/agregar`, usuario);
  }

  actualizarUsuario(usuario: UsuarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/usuarios/actualizar/${usuario.id_usuario}`, usuario)
  }

  borrarUsuario(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/usuarios/borrar/${id}`)
  }
}
