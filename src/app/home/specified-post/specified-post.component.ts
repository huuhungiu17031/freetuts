import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  mergeMap } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { DatePipe } from '@angular/common';


import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
@Component({
  selector: 'app-specified-post',
  templateUrl: './specified-post.component.html',
  styleUrls: ['./specified-post.component.scss']
})
export class SpecifiedPostComponent implements OnInit {
  data: any;
  datePipeString: string;
  commentList
  public Editor = ClassicEditor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private transferDataService: TransferDataService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.postsService.detailCourse(params.get('postID'), "list")),
      )
      .subscribe((data) => {
        this.data = data[0]
        this.transferDataService.sendDataToStoragePost(this.data.title)
        this.transferDataService.sendDataToStorageComment(this.data.comment)
        this.commentList=this.transferDataService.commentFromStorage
        console.log(this.commentList)
        this.formatDate(this.data.createAt)
      })
  }
  formatDate(data) {
    this.datePipeString = this.datePipe.transform(data, 'dd-MM-yyyy HH:mm:ss');
  }
}
