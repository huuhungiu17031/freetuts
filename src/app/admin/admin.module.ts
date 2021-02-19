import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreatePostComponent } from './create-post/create-post.component';
//CDK EDITOR MODULE
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

//Import creadcum module
import { BreadcrumbModule } from 'angular-crumbs'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const adminComponent = [
  AdminLayoutComponent,
  AdminHomeComponent,
  CreateCategoryComponent,
  AdminLoginComponent,
  CreatePostComponent,
]
const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, data: { breadcrumb: 'HomeLogin' }, children: [
      { path: 'login', component: AdminLoginComponent, data: { breadcrumb: 'Login' } },
      { path: 'createCategory', component: CreateCategoryComponent, data: { breadcrumb: 'Create Category' } },
      { path: 'post', component: CreatePostComponent, data: { breadcrumb: 'Create Post' } },
    ]
  },

]

@NgModule({
  declarations: [
    adminComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    CKEditorModule,
  ],
  exports: [
    adminComponent
  ]
})
export class AdminModule { }
