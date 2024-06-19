import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  temp1= 0;
  temp2= 0;
  temp3= 0;
  temp4= 0;
  media= 0;

  constructor(public router: Router) {}

  abrirTelas(){
    this.media = (this.temp1+this.temp2+this.temp3+this.temp4)/4;
    this.router.navigateByUrl(`/tela-confirmar/${this.media}`);
  }
}
