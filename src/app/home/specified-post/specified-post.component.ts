import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { mergeMap, tap } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { DatePipe } from '@angular/common';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//Import FormBuilder
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { CommentService } from 'src/app/services/comment.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
@Component({
  selector: 'app-specified-post',
  templateUrl: './specified-post.component.html',
  styleUrls: ['./specified-post.component.scss']
})
export class SpecifiedPostComponent implements OnInit {
  data: any;
  datePipeString: string;
  commentList
  id
  public Editor = ClassicEditor;
  public myForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private transferDataService: TransferDataService,
    private datePipe: DatePipe,
    private commentService: CommentService,
    private sweetAlertService: SweetAlertService,

  ) { }

  ngOnInit(): void {
    // this.handleFormSubmit();
    this.activatedRoute.paramMap
      .pipe(
        tap((params) => {
          this.form(params.get('postID'))
          this.id = params.get('postID')
        }),
        mergeMap(
          (params) => this.postsService.detailCourse(params.get('postID'), "list")
        ),
      )
      .subscribe((data) => {
        this.data = data[0]
        this.transferDataService.sendDataToStoragePost(this.data.title)
        this.transferDataService.sendDataToStorageComment(this.data.comment)
        this.commentList = this.transferDataService.commentFromStorage

        this.formatDate(this.data.createAt)
      })
  }
  formatDate(data) {
    this.datePipeString = this.datePipe.transform(data, 'dd-MM-yyyy HH:mm:ss');
  }

  form(id) {
    this.myForm = new FormBuilder()
      .group({
        comment: new FormControl('', [
          Validators.required,
        ]),
        name: new FormControl('', [
          Validators.required,
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        isActive: new FormControl(false, [
          Validators.required
        ]),
        imageURL: new FormControl(
          '',
        ),
        postModelID: new FormControl(id, [
          Validators.required
        ])
      })
  }

  save() {
    console.log(this.myForm.value);
    // this.form(this.id)
    let payload = this.myForm.value
    this.commentService.postComment(payload).subscribe(
      (res) => {
        this.sweetAlertService.successBox(`Đăng bài thành công. ${payload.name} đợi Hưng đẹp trai duyệt bài nhe!!!`)
      },
      (err) => {
        this.sweetAlertService.error(`${payload.name} vui lòng thử lại!`)
      }
    )
  }

}
