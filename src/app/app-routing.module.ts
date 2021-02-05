import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CourseDetailComponent } from './components/course-detail/course-detail.component';
// import { HomeComponent } from './components/home/home.component';
// import { SubDetailComponent } from './components/sub-detail/sub-detail.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [

  {
    path: '', loadChildren: () => import('./home/home.module')
      .then((m) => m.HomeModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then((m) => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
