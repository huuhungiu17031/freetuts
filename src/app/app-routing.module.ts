import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { SubDetailComponent } from './components/sub-detail/sub-detail.component';

const routes: Routes = [
  { path: 'sub/:subID', component: SubDetailComponent },
  { path: 'course/:courseID', component: CourseDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
