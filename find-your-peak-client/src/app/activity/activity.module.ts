import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { EditActivityComponent } from './components/edit-activity/edit-activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';
import { DetailsActivityComponent } from './components/details-activity/details-activity.component';




@NgModule({
  declarations: [
    ListActivitiesComponent,
    EditActivityComponent,
    DetailsActivityComponent,
    DeleteActivityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ListActivitiesComponent,
    EditActivityComponent,
    DetailsActivityComponent,
    DeleteActivityComponent
  ]
})
export class ActivityModule { }
