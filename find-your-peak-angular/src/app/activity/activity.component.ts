import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activityList: string[];

  constructor() { }

  ngOnInit(): void {
    this.activityList = [
        '../../assets/imgs/mountains/babamountain.jpg',
        '../../assets/imgs/mountains/desatmountain.jpg',
        '../../assets/imgs/mountains/galichitsa.jpg',
        '../../assets/imgs/mountains/jablanica.jpg',
        '../../assets/imgs/mountains/korab.jpg',
        '../../assets/imgs/mountains/kozjak.jpg',
        '../../assets/imgs/mountains/kozuf.jpg',
        '../../assets/imgs/mountains/ograzden.jpg',
        '../../assets/imgs/mountains/osogovo.jpg',
        '../../assets/imgs/mountains/plackovica.jpg',
        '../../assets/imgs/mountains/sarmountains.jpg',
        '../../assets/imgs/mountains/solunskaglava.jpg',
        '../../assets/imgs/mountains/belasica.jfif',
        '../../assets/imgs/mountains/popovashapka.jfif',
        '../../assets/imgs/mountains/skopskacrnagora.jfif',
        '../../assets/imgs/mountains/titovvrv.jfif',

    ];
  }

}
