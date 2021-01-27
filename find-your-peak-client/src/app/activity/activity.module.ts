import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { EditActivityComponent } from './components/edit-activity/edit-activity.component';
import { DetailsActivityComponent } from './components/details-activity/details-activity.component';

@NgModule({
  declarations: [
    ListActivitiesComponent,
    EditActivityComponent,
    DetailsActivityComponent,
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
  ]
})
export class ActivityModule { }
