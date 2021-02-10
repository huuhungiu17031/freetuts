import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import { CourseService } from 'src/app/services/course.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: any
  posts: any
  defaultPage: number = 1
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private transferDataService: TransferDataService,
    private router: Router,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.getCourse();
    this.getPosts(this.defaultPage);
  }

  getCourse() {
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

  getPosts(num) {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.postService.postsOnCourse(params.get('courseID'), "listPost", num)),
      ).subscribe(
        (data) => {
          this.posts = data
          console.log(this.posts)
        }
      )
  }

  navigate_post(id_post?: string, suffix?: string, id_sub?: string, prefix?: string) {
    this.router.navigate([`${prefix}/${id_sub}/${suffix}`, id_post]);
  }

  pagination(pageNum) {
    this.getPosts(pageNum)
  }


}





