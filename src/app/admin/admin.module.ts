import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreatePostComponent } from './create-post/create-post.component';
//CDK_EDITOR
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
const adminComponent = [
  AdminLayoutComponent,
  AdminHomeComponent,
  CreateCategoryComponent,
  AdminLoginComponent,
  CreatePostComponent,
]
const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'login', component: AdminLoginComponent },
      { path: 'createCategory', component: CreateCategoryComponent },
      { path: 'post', component: CreatePostComponent },
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
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  exports: [
    adminComponent
  ]
})
export class AdminModule { }
