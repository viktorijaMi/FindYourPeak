import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../ActivityModel';
import { ActivityService } from '../services/activity-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activityList: ActivityModel[];

  constructor(
    private activityService: ActivityService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getActivities();
  }

  private getActivities() {
      this.activityService.getActivityList()
      .subscribe(data => {
        this.activityList = data;
      })
  }

  activityDetails(id: number) {
    //TODO implement this
  }

  activityUpdate(id: number) {
    //TODO implement this
  }

  deleteActivity(id: number) {
    //TODO implement this
  }

}
