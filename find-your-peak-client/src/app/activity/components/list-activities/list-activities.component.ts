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
  searchTerm: String;

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

  ngOnInit(): void {
    this.getActivities();
  }

  public onSelect(activity): void {
    this.router.navigate(['/activity/details', activity.id]);
  }

  public searchActivity() {
    this.activityList = this.activityList.filter(data => {
      if(this.searchTerm == ""){
        this.ngOnInit();
      } else if(this.searchTerm != ""){
        return data.title.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase()) ||
        data.type.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());
      }
    })
  }

}
