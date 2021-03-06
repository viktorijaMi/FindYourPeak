import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityModel } from 'src/app/ActivityModel';
import { ActivityService } from '../../../services/activity-service/activity-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.scss']
})
export class EditActivityComponent implements OnInit {

  public activity: ActivityModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityService: ActivityService,
    private _location: Location
    ) { }

  private getActivityById(id: number) {
      return this.activityService.getActivityById(id)
        .subscribe(data => {
          this.activity = data;
        });
    }

  ngOnInit(): void {
    let id = parseInt(this.activatedRoute .snapshot.paramMap.get('id'));
    this.getActivityById(id);
  }

  public onBack() {
    this._location.back();
  }

  public onSubmit() {
    this.activityService.updateActivity(this.activity.id, this.activity)
      .subscribe(data => {
        this._location.back();
      },
      error => console.log(error));
  }

}
