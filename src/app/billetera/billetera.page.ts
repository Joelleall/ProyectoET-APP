import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.page.html',
  styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {
  fechaVencimiento: string= ""; // Propiedad para la fecha de vencimiento
  nombreTarjeta: string= ""; // Propiedad para la fecha de vencimiento
  numeroTarjeta: string= ""; // Propiedad para la fecha de vencimiento
  cvv: number = 0; //
  
  constructor(private navCtrl: NavController, public alertController: AlertController) {
  }

  
  ngOnInit() {
  }
  volverPaginaAnterior() {
    this.navCtrl.back();
  }

validarTarjeta() {
  const Tarjeta = this.nombreTarjeta
  const numero = this.numeroTarjeta
  const cvv = this.cvv
  const fechaVencimiento = this.fechaVencimiento

  if (Tarjeta != "" && numero != "" && cvv != 0 && fechaVencimiento != "") {
    this.navCtrl.navigateForward('/home');
  } else {
    this.mostrarVentanaEmergente();
  }
}

  async mostrarVentanaEmergente() {
    const alert = await this.alertController.create({
      header: 'Error al ingresar la tarjeta',
      message: 'Ingrese todo los datos de su tarjeta por favor',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}




