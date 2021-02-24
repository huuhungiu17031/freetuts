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
import { BreadcrumbModule } from 'angular-crumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Import QuillJS
import { QuillModule } from 'ngx-quill';
import { ListPostComponent } from './list-post/list-post.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UpdatePostComponent } from './update-post/update-post.component';
const adminComponent = [
  AdminLayoutComponent,
  AdminHomeComponent,
  CreateCategoryComponent,
  AdminLoginComponent,
  CreatePostComponent,
  ListPostComponent,
  UpdatePostComponent,
];
const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    data: { breadcrumb: 'HomeLogin' },
    children: [
      {
        path: 'login',
        component: AdminLoginComponent,
      },
      {
        path: 'createCategory',
        component: CreateCategoryComponent,
        data: { breadcrumb: 'Create Category' },
      },
      {
        path: 'post',
        component: CreatePostComponent,
        data: { breadcrumb: 'Create Post' },
      },
      {
        path: 'listPost',
        component: ListPostComponent,
        data: { breadcrumb: 'DASHBOARD OF POST' },
      },
      {
        path: 'updatePost/:id',
        component: UpdatePostComponent,
        data: { breadcrumb: 'UPDATE POST' },
      },
    ],
  },
];

@NgModule({
  declarations: [adminComponent, PaginationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    CKEditorModule,
    QuillModule,
  ],
  exports: [adminComponent],
})
export class AdminModule {}
