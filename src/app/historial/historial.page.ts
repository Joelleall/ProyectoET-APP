import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  volverPaginaAnterior() {
    this.navCtrl.back();
  }
}
