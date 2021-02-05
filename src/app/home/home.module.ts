import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { SubDetailComponent } from './sub-detail/sub-detail.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InforBoxComponent } from './infor-box/infor-box.component';
import { PostDetailComponent } from './infor-box/post-detail/post-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HomeLayoutComponent } from '../layout/home-layout/home-layout.component';
const homeComponents = [
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
  HomeLayoutComponent
]


const homeRoutes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'sub/:subID', component: SubDetailComponent },
      { path: 'course/:courseID', component: CourseDetailComponent },
    ]
  }
]
@NgModule({
  declarations: [
    homeComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    homeComponents
  ]
})
export class HomeModule { }
