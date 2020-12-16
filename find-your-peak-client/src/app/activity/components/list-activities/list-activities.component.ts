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

  private getActivities() {
        this.activityService.getActivityList()
        .subscribe(data => {
          this.activityList = data;
        })
  }

  private getActivitiesByText(searchTerm: String) {
    this.activityService.getActivityList()
    .subscribe(data => {
      this.activityList = data.filter(act => {
        if(act.title === searchTerm)
        return true;
      })
    })
  }

  ngOnInit(): void {
    this.getActivities();
  }

  public onSelect(activity): void {
    this.router.navigate(['/activity/details', activity.id]);
  }

  public getSearchValue(item) {
    if (item.target.text != null) {
      console.log(item.target.text);
      this.getActivitiesByText(item.target.text);
    }
  }

}
