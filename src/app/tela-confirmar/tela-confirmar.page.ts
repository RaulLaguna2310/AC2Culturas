import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  media: number = 0;
  ftexoticas: string[] = [];

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.media = Number(this.activateRoute.snapshot.paramMap.get('media'));
    this.ftexoticas = this.getCultura(this.media);
  }

  getCultura(penis: number): string[] {
    if (penis >= 20 && penis <= 30) {
      return ['Pitaya', 'Romã', 'Cherimoia'];
    } else if (penis >=  30 && penis <= 40) {
      return ['Longan', 'Lichia', 'Granadilha'];
    } else if (penis > 40 && penis <= 50) {
      return ['Mangostão', 'Physalis', 'Rambutão', 'Tamarillo'];
    } else {
      return ['Nenhuma fruta vai nascer ai parcero!'];
    }
  }
}