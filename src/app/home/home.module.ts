import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeadingContainerDirective } from '../directives/heading-container.directive';

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
import { SpecifiedPostComponent } from './specified-post/specified-post.component';
import { SubComponent } from './sub/sub.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingComponent } from './loading/loading.component';
import { NoContentComponent } from './no-content/no-content.component';
//CDK EDITOR MODULE
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//Import creadcum module
import { BreadcrumbModule } from 'angular-crumbs'
//Import owl carousel module
import { CarouselModule } from 'ngx-owl-carousel-o';

//Import pipes
import { SummaryPipe } from '../pipes/summary.pipe';
import { ShortcutPipe } from '../pipes/shortcut.pipe';


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
  HomeLayoutComponent,
  SubComponent,
  PaginationComponent,
  LoadingComponent,
  NoContentComponent,
  SpecifiedPostComponent
]


const homeRoutes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'sub/:subID', component: SubDetailComponent, children: [
          { path: '', component: SubComponent },
          {
            path: 'course/:courseID', component: CourseDetailComponent,
          },
          {
            path: 'post/:postID', component: SpecifiedPostComponent
          }
        ]
      }
    ]
  }
]
@NgModule({
  declarations: [
    homeComponents,
    HeadingContainerDirective,
    SummaryPipe,
    ShortcutPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(homeRoutes),
    BreadcrumbModule,
    CKEditorModule,
    CarouselModule,
    ReactiveFormsModule
  ],


  exports: [
    homeComponents
  ]
})
export class HomeModule { }
