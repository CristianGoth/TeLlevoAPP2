import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage {
  viajes: any[] = [];
  fecha: string = '';
  hora: string = '';
  ubicacion: string = '';
  cupos: string = '';
  precio: string = '';

  constructor(private storage: Storage, private alertController: AlertController) {
    this.initDatabase();
  }

  async initDatabase() {
    await this.storage.create();
    this.loadData();
  }

  ionViewDidEnter() {
    this.loadData();
  }

  async loadData() {
    this.viajes = await this.storage.get('viajes') || [];
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async guardarViaje() {
    const nuevoViaje = {
      fecha: this.fecha,
      hora: this.hora,
      ubicacion: this.ubicacion,
      cupos: this.cupos,
      precio: this.precio,
    };
    this.viajes.push(nuevoViaje);
    await this.storage.set('viajes', this.viajes);

    // Limpiar campos
    this.fecha = '';
    this.hora = '';
    this.ubicacion = '';
    this.cupos = '';
    this.precio = '';

    // Mostrar alerta de éxito
    this.showAlert('Viaje creado exitosamente');
  }

  async tomarViaje(index: number) {
    const viajeSeleccionado = this.viajes[index];

    // Verificar si hay cupos disponibles
    if (viajeSeleccionado.cupos > 0) {
      // Decrementar el número de cupos
      viajeSeleccionado.cupos--;

      // Actualizar el viaje en la lista
      this.viajes[index] = viajeSeleccionado;

      // Actualizar la información en el almacenamiento
      await this.storage.set('viajes', this.viajes);
    } else {
      // Mostrar alerta de que los cupos están llenos
      this.showAlert('Lo sentimos, los cupos ya están llenos');
    }
  }
}
