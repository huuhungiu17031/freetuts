import { Component, OnInit } from '@angular/core';
//Import FormBuilder
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//Services
import { PostsService } from '../../services/posts.service';
import { SubService } from '../../services/sub.service';
import { CourseService } from '../../services/course.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  public myForm: FormGroup;
  // public formValues
  public listSub
  public listCourse
  public post


  constructor(
    private postService: PostsService,
    private subService: SubService,
    private courseService: CourseService,
    private transferDataService: TransferDataService,
    private sweetAlertService: SweetAlertService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    //get post from listpostComponent
    this.form(this.postService.currentUserValue)
    this.getAllSub()
    this.getCourses()
  }




  form(data) {

    this.myForm = new FormBuilder().group({
      _id: new FormControl(data._id, [

      ]),
      title: new FormControl(data.title, [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(2)
      ]),
      imageURL: new FormControl(data.imageURL, [
        Validators.required
      ]),
      description: new FormControl(data.description, [
        Validators.required
      ]),
      courseModelID: new FormControl(data.courseModelID, [
        Validators.required

      ]),
      subModelID: new FormControl(data.subModelID, [
        Validators.required
      ]),
    })
  }

  save() {
    console.log(this.myForm.value);
    // let currentPost = JSON.parse(localStorage.getItem('currentPost'));
    let payload = this.myForm.value;
    // console.log(currentPost)
    this.postService.updatePost(payload).subscribe(res => {
      console.log(res)
      this.sweetAlertService.successBox(`Update successfully ${res['data'].title}`)
      localStorage.removeItem('currentPost')
      // this.transferDataService.navigate('/admin/listPost');
      this.route.navigate([`/admin/listPost`])
    })
  }


  getAllSub() {
    this.subService.getAllSub('list').subscribe((data) => {
      this.listSub = data;
    })
  }

  getCourses() {
    this.courseService.getAllCourse(`list`).subscribe((data) => {
      console.log(data);
      this.listCourse = data
    })
  }
}
