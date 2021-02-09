import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tap, mergeMap } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-specified-post',
  templateUrl: './specified-post.component.html',
  styleUrls: ['./specified-post.component.scss']
})
export class SpecifiedPostComponent implements OnInit {
  data: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.postsService.detailCourse(params.get('postID'), "list")),
        tap(data => console.log(data[0])),
      )
      .subscribe((data) => {
        this.data = data[0]
      })
  }

}
