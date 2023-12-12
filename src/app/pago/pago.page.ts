import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  bancoTarjeta: string =""; // Propiedad para la fecha de vencimiento
  Gmail: string =""; // Propiedad para la fecha de vencimiento
  Monto: number = 0;
  NdeCuenta: number = 0;
  constructor(private navCtrl: NavController,
              public alertController: AlertController) { }

  ngOnInit() {
  }

  volverPaginaAnterior() {
    this.navCtrl.back();
  }

  async transferirDinero() {
    // Realiza la lógica de transferencia de dinero aquí
    // ...

    // Muestra el alert
    const alert = await this.alertController.create({
      header: 'Transferencia Completada',
      message: 'Dinero transferido exitosamente.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
