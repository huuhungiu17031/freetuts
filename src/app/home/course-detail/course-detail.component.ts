import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import { CourseService } from 'src/app/services/course.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private transferDataService: TransferDataService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.courseService.detailCourse(params.get('courseID'), 'list')),
        tap(data => console.log("CourseDetailComponent", data[0])),
      )
      .subscribe((data) => {
        this.course = data[0]
        this.transferDataService.sendDataToStorageCourse(this.course);
      })
  }
  navigate_post(id_post?: string, suffix?: string, id_sub?: string, prefix?: string) {
    this.router.navigate([`${prefix}/${id_sub}/${suffix}`, id_post]);
  }
}





