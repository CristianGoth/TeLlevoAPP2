import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = ''; // Asegurarse de inicializar las propiedades si las usas

  constructor() {}

  resetPassword() {
    // Tu lógica para restablecer la contraseña
  }
}
