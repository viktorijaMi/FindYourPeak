import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';
import { EditActivityComponent } from './components/edit-activity/edit-activity.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';

const routes: Routes = [
  { path: 'activity', component: ListActivitiesComponent },
  { path: 'activity/details/:id', component: EditActivityComponent },
  { path: 'activity/delete/:id', component: DeleteActivityComponent },
  { path: 'activity/add', component: AddActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
