import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../../../ActivityModel';
import { ActivityService } from '../../../services/activity-service/activity-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  activityList: ActivityModel[];

  constructor(
    private activityService: ActivityService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getActivities();
  }

  onSelect(activity): void {
    this.router.navigate(['/activity/details', activity.id]);
  }

  private getActivities() {
      this.activityService.getActivityList()
      .subscribe(data => {
        this.activityList = data;
      })
  }

  public getActivitiesByText(searchTerm: String) {
    this.activityService.getActivityList()
    .subscribe(data => {
      this.activityList = data.filter(act => {
        if(act.title === searchTerm)
        return true;
      })
    })
  }

  activityUpdate(id: number) {
    //TODO implement this
  }

  deleteActivity(id: number) {
    //TODO implement this
  }

  getSearchValue(item) {
    if (item.target.text != null) {
      this.getActivitiesByText(item.target.text);
    }
  }

}
