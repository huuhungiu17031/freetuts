import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const adminComponent = [
  AdminLayoutComponent,
  AdminHomeComponent

]
const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent
  },
  { path: 'adminHome', component: AdminHomeComponent }
]

@NgModule({
  declarations: [
    adminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    adminComponent
  ]
})
export class AdminModule { }
