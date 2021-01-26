import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';
import { MetadataService } from './services/metadata.service';
import { SubDetailComponent } from './components/sub-detail/sub-detail.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { SubService } from './services/sub.service';
import { CourseService } from './services/course.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavComponent,
    SubDetailComponent,
    CourseDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MetadataService,
    SubService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
