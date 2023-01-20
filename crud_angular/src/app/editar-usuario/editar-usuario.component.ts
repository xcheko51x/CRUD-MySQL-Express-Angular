import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id = ''
  usuario = new UsuarioModel("","","");

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuario = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.usuario.id_usuario) {
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/usuarios'])
      })
    } else {
      console.log('crear');
      this.usuarioService.agregarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/usuarios'])
      })
    }
  }
}
