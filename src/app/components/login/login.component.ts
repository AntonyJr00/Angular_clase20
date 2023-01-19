import { Component } from '@angular/core';
import { InterceptorService } from 'src/app/services/interceptor.service';
import { ServicioService } from 'src/app/services/servicio.service';

interface Token {
  name: string;
  pass: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private json: ServicioService) {}
  nombre: string = '';
  contra: string = '';

  enviarForm() {
    localStorage.setItem('token', this.nombre);
    this.json.getApi();
    this.json.user;
  }
}
