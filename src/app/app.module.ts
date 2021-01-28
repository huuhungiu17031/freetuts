import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Owl carousel modules
import { OwlModule } from 'ngx-owl-carousel';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';
import { MetadataService } from './services/metadata.service';
import { SubDetailComponent } from './components/sub-detail/sub-detail.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { SubService } from './services/sub.service';
import { CourseService } from './services/course.service';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InforBoxComponent } from './components/infor-box/infor-box.component';
import { PostDetailComponent } from './components/infor-box/post-detail/post-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavComponent,
    SubDetailComponent,
    CourseDetailComponent,
    HomeComponent,
    SidebarComponent,
    PostDetailComponent,
    InforBoxComponent,
    FooterComponent,
    ScrollToTopComponent,
    CopyrightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwlModule,
  ],
  providers: [MetadataService, SubService, CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
