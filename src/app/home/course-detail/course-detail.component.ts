import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap, mergeMap } from 'rxjs/operators';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.courseService.detailCourse(params.get('courseID'), 'list')),
        tap(data => console.log(data[0])),
      )
      .subscribe(data => this.course = data[0])


  }
}





