import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditActivityComponent } from './components/edit-activity/edit-activity.component';
import { DeleteActivityComponent } from './components/delete-activity/delete-activity.component';
import { DetailsActivityComponent } from './components/details-activity/details-activity.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';

const routes: Routes = [
  { path: 'activity', component: ListActivitiesComponent },
  { path: 'activity/details/:id', component: DetailsActivityComponent },
  { path: 'activity/edit/:id', component: EditActivityComponent },
  // { path: 'activity/add' /*insert new component*/ },
  { path: 'activity/delete/:id', component: DeleteActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
