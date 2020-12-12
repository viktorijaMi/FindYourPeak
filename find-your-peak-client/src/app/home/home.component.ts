import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: string[] = [
    '../../assets/imgs/placeholder.jpg',
    '../../assets/imgs/placeholder.jpg',
    '../../assets/imgs/placeholder.jpg'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
