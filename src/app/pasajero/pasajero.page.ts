import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ViajesService } from 'src/app/viajes.service';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage {
  viajes: any[] = [];

  constructor(private navCtrl: NavController, private viajesService: ViajesService, public alertController: AlertController) {
    this.viajes = this.viajesService.obtenerViajes();
  }

  volverPaginaAnterior() {
    this.navCtrl.back();
  }
  async contactarConductor(telefono: string, nombre: string) {
    const alert = await this.alertController.create({
      header: 'Este es el telefono de tu conductor',
      message: `Contactate con este numero: ${telefono}`,
      buttons: ['Cerrar'],
    });

    await alert.present();
  }
}
