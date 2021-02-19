import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import { CourseService } from 'src/app/services/course.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { PostsService } from '../../services/posts.service';
import { CourseDetail } from '../../model/course.model';
import { PostDetail } from '../../model/post.model';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: CourseDetail
  posts: Array<PostDetail>
  defaultPage: number = 1
  numberOfPages: number
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private transferDataService: TransferDataService,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.getCourse();
    this.getPosts(this.defaultPage);
    console.log(this.numberOfPages)

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
        console.log(this.course)
      })
  }

  getPosts(num) {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.postService.postsOnCourse(params.get('courseID'), "listPost", num)),
      ).subscribe(
        (data) => {
          this.posts = data

        }
      )
  }

  navigate_post(id_post: string, id_sub: string) {
    let URL = `sub/${id_sub}/post`;
    this.transferDataService.navigate(URL, id_post)
  }

  pagination(pageNum) {
    this.getPosts(pageNum)
  }
  paginationEvent(pageNum: number) {
    // console.log("Parent", pageNum)
    this.getPosts(pageNum)
  }




}





