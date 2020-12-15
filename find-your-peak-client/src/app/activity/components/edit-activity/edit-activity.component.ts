import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityModel } from 'src/app/ActivityModel';
import { ActivityService } from '../../../services/activity-service/activity-service.service';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.scss']
})
export class EditActivityComponent implements OnInit {

  public activity: ActivityModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityService: ActivityService
    ) { }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getActivityById(id);
  }

  getActivityById(id: number) {
    this.activityService.getActivityById(id)
      .subscribe(data => {
        this.activity = data;
      });
  }

}
