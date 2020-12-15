import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';
import { EditActivityComponent } from './components/edit-activity/edit-activity.component';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    ListActivitiesComponent,
    AddActivityComponent,
    EditActivityComponent,
    DeleteActivityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSliderModule
  ],
  exports: [
    ListActivitiesComponent,
    AddActivityComponent,
    EditActivityComponent,
    DeleteActivityComponent
  ]
})
export class ActivityModule { }
