import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../../../services/activity-service/activity-service.service';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.scss']
})
export class EditActivityComponent implements OnInit {

  constructor(
    activatedRoute: ActivatedRoute,
    activityService: ActivityService
    ) { }

  ngOnInit(): void {
  }

}
