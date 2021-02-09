import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//CDK_EDITOR
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//Owl carousel modules
import { OwlModule } from 'ngx-owl-carousel';
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
import { ShortcutPipe } from './pipes/shortcut.pipe';
import { PostsService } from './services/posts.service';
const Services = [
  MetadataService,
  SubService,
  CourseService,
  AdsService,
  TransferDataService,
  PostsService
]
@NgModule({
  declarations: [
    AppComponent,
    ShortcutPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwlModule,
    AdminModule,
    HomeModule,
    AdminModule,
    CKEditorModule
  ],
  providers: [
    Services
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
