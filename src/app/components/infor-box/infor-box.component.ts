import { AfterViewInit, Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { CourseService } from 'src/app/services/course.service';
declare var $: any;
import { tap, map, filter } from 'rxjs/operators';
import { forkJoin } from 'rxjs'
import { SubService } from '../../services/sub.service';
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
    private detail: SubService
  ) { }

  ngOnInit(): void {
    const course = this.courseService.detailCourse(this.idcourse, 'list')
      .pipe(map(data => data[0]));
    const allPosts = this.detail.allPostInSub("listAds")

    forkJoin([course, allPosts])
      .pipe(
        tap((data) => console.log(data))
      )
      .subscribe(results => {
        this.course = results[0];
        this.allPosts = results[1];
        console.log(this.allPosts)
      });

  }



  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 5,
      dots: false,
      responsiveClass: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        }
      }
    })
  }
}
