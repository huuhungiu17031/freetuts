import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, tap } from 'rxjs/operators';
import { CourseDetailService } from 'src/app/services/course-detail.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';

@Component({
  selector: 'app-sub-course',
  templateUrl: './sub-course.component.html',
  styleUrls: ['./sub-course.component.scss']
})
export class SubCourseComponent implements OnInit {
  renderMaterial
  subCourseData
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseDetailService: CourseDetailService,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.getSubCourse()
    this.getDetail()
  }

  navigate(id) {
    let URL = `exercise`
    this.transferDataService.navigate(URL, id)
  }

  getSubCourse() {
    let URL = 'allExercise'
    this.activatedRoute.paramMap
      .pipe(
        tap((params) => console.log(params)),
        mergeMap((params) => this.courseDetailService.getWithId(URL, params.get('courseID'))),
      )
      .subscribe(res => {
        this.renderMaterial = res['data']
  
      }
      )
  }
  getDetail() {
    let URL = 'detail'
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.courseDetailService.getWithId(URL, params.get('courseID'))),
      )
      .subscribe(res => {
        this.subCourseData = res['data']
      }
      )
  }
}
