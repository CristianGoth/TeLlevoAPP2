import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; 

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  email: string = '';

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async resetearContrasena() {
    try {
      if (this.email) {
        const auth = getAuth(); // Obtén la instancia de autenticación de Firebase
        await sendPasswordResetEmail(auth, this.email); // Pasa un objeto vacío como configuración
        this.mostrarAlerta('Se ha enviado un correo para restablecer la contraseña.');
      } else {
        this.mostrarAlerta('Por favor, ingresa tu dirección de correo electrónico.');
      }
    } catch (error) {
      console.error('Error al enviar el correo de restablecimiento de contraseña:', error);
      this.mostrarAlerta('Error al enviar el correo de restablecimiento de contraseña. Por favor, verifica la dirección de correo electrónico.');
    }
  }
}
