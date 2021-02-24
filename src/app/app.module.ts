import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
//CDK_EDITOR
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//Owl carousel modules
//Services
import { AdsService } from './services/ads.service';
import { MetadataService } from './services/metadata.service';
import { CourseService } from './services/course.service';
import { TransferDataService } from './services/transfer-data.service';
import { SubService } from './services/sub.service';
//Modules
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
//Pipe
import { PostsService } from './services/posts.service';
//Import creadcum module
import { BreadcrumbModule } from 'angular-crumbs';
import { AuthService } from './services/auth.service';
import { DatePipe } from '@angular/common';
import { SweetAlertService } from './services/sweet-alert.service';
//Import owl module
import { OwlModule } from 'ngx-owl-carousel';
import { DateFormatPipe } from './pipes/date-format.pipe';  
const Services = [
  MetadataService,
  SubService,
  CourseService,
  AdsService,
  TransferDataService,
  PostsService,
  AuthService,
  SweetAlertService
]
@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    HomeModule,
    AdminModule,
    CKEditorModule,
    QuillModule,
    BreadcrumbModule,
    OwlModule
  ],
  providers: [
    Services,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
