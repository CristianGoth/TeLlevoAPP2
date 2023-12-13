import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  async ingresar() {
    try {
      if (this.password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
      }

      const auth = getAuth();
      const credentials = await signInWithEmailAndPassword(auth, this.email, this.password);

      console.log('Inicio de sesión exitoso:', credentials);

      // Redirige solo si el inicio de sesión es exitoso
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }
}
