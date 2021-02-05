import { AfterViewInit, Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
import { CourseService } from 'src/app/services/course.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs'
import { SubService } from '../../services/sub.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-infor-box',
  templateUrl: './infor-box.component.html',
  styleUrls: ['./infor-box.component.scss']
})
export class InforBoxComponent implements OnInit, AfterViewInit {
  private idcourse: String = '600d71ad1bf06860543ca801'
  data: any
  course: any
  allPosts
  constructor(
    private courseService: CourseService,
    private detail: SubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const course = this.courseService.detailCourse(this.idcourse, 'list')
      .pipe(map(data => data[0]));
    const allPosts = this.detail.allPostInSub("listAds")
    forkJoin([course, allPosts])
      .subscribe(results => {
        this.course = results[0];
        this.allPosts = results[1];
      });

  }

  redirectToSub(id) {
    this.router.navigate(['/sub', id]);
  }

  ngAfterViewInit(): void {
    this.owlCarousel();
  }


  owlCarousel() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 5,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    })
  }
}
