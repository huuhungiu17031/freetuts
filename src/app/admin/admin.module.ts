import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const adminComponent = [
  AdminLayoutComponent,
  AdminHomeComponent,
  CreateCategoryComponent,
  AdminLoginComponent,

]
const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'login', component: AdminLoginComponent },
      { path: 'createCategory', component: CreateCategoryComponent }
    ]
  },

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
