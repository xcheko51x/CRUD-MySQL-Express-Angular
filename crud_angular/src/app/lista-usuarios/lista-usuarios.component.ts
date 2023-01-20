import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Observable<UsuarioModel[]> | undefined;

  constructor(
    private usuarioService: UsuarioService,
     private router: Router
  ) { }

  ngOnInit() {
      this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  borrarUsuario(id: string) {
    this.usuarioService.borrarUsuario(id).subscribe(data => {
      console.log(data);
    })

    this.router.navigate(['/usuarios'])
  }

}
