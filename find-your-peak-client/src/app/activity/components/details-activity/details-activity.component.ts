import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityModel } from 'src/app/ActivityModel';
import { ActivityService } from '../../../services/activity-service/activity-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.scss']
})
export class DetailsActivityComponent implements OnInit {

  public activity: ActivityModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private activityService: ActivityService
    ) { }

  private getActivityById(id: number) {
      this.activityService.getActivityById(id)
        .subscribe(data => {
          this.activity = data;
        });
    }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getActivityById(id);
  }

  public updateActivity(activity) {
    this.router.navigate(['activity/edit', activity.id]);
  }

  public deleteActivity(activity) {
    this.activityService.deleteActivity(activity.id)
      .subscribe(data => {
        console.log("Deleted" + data);
        this._location.back();
      },
      error => console.log(error));
  }

}
