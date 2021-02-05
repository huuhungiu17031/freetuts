import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Owl carousel modules
import { OwlModule } from 'ngx-owl-carousel';
import { AdsService } from './services/ads.service';
import { MetadataService } from './services/metadata.service';
import { CourseService } from './services/course.service';
import { SubService } from './services/sub.service';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwlModule,
    AdminModule,
    HomeModule,
    AdminModule
  ],
  providers: [
    MetadataService,
    SubService,
    CourseService,
    AdsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
