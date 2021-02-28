import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PaginationComponent } from './pagination/pagination.component'
import { UpdatePostComponent } from './update-post/update-post.component';
import { CommentDetailComponent } from './update-post/comment-detail/comment-detail.component';
//CDK EDITOR MODULE
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//Import creadcum module
import { BreadcrumbModule } from 'angular-crumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatExpansionModule } from '@angular/material/expansion';

import { ShareModule } from '../share/share.module';
import { AuthGuardService } from '../services/auth-guard.service';
import { NavComponent } from './nav/nav.component';
const adminComponent = [
  AdminLayoutComponent,
  AdminHomeComponent,
  CreateCategoryComponent,
  AdminLoginComponent,
  CreatePostComponent,
  ListPostComponent,
  UpdatePostComponent,
  CommentDetailComponent,
  PaginationComponent,
  NavComponent,

]
const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {
        path: 'login', component: AdminLoginComponent
      },
      {
        path: 'createCategory', component: CreateCategoryComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'post', component: CreatePostComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'listPost', component: ListPostComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'updatePost/:id', component: UpdatePostComponent, canActivate: [AuthGuardService]
      }
    ]
  },
];

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
    ShareModule,
    MatExpansionModule
  ],
  exports: [adminComponent],
})
export class AdminModule { }