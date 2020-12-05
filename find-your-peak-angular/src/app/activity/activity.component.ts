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
      '../../assets/imgs/activity/1.jpg',
      '../../assets/imgs/activity/2.jpg',
      '../../assets/imgs/activity/3.jpg',
      '../../assets/imgs/activity/4.jpg',
      '../../assets/imgs/activity/5.jpg',
      '../../assets/imgs/activity/6.jpg',
      '../../assets/imgs/activity/7.jpg',
      '../../assets/imgs/activity/8.jpg',
      '../../assets/imgs/activity/9.jpg',
      '../../assets/imgs/activity/10.jpg',
      '../../assets/imgs/activity/11.jpg',
      '../../assets/imgs/activity/12.jpg',
      '../../assets/imgs/activity/13.jpg',
      '../../assets/imgs/activity/14.jpg',
      '../../assets/imgs/activity/15.jpg',
      '../../assets/imgs/activity/16.jpg',
      '../../assets/imgs/activity/17.jpg',
      '../../assets/imgs/activity/18.jpg',
      '../../assets/imgs/activity/19.jpg',
      '../../assets/imgs/activity/20.jpg',
    ];
  }

}
