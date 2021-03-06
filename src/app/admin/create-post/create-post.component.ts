import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//Import FormBuilder
import { FormBuilder, FormGroup } from '@angular/forms'
//Posts service
import { PostsService } from '../../services/posts.service';
import { SubService } from 'src/app/services/sub.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  public myForm: FormGroup;
  public listSub
  public listCourse
  formValues


  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private subService: SubService,
    private sweetAlertService: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.handleFormSubmit();
    this.getAllSub();
  }

  getAllSub() {
    this.subService.getAllSub('list').subscribe((data) => {
      this.listSub = data;
    })
  }

  getCourses(id) {
    this.subService.getAllSub(`list/${id}`).subscribe((data) => {
      console.log(data);
      this.listCourse = data[0].courses
    })
  }

  handleFormSubmit() {
    this.myForm = this.fb.group({
      title: '',
      imageURL: '',
      description: '',
      courseModelID: '',
      subModelID: ''
    })
    
  }

  save() {
    this.postService.submitPost(this.myForm.value).subscribe(data => {
      this.sweetAlertService.successBox(data['title']);
    })
  }

 
  subModelChange(e) {
    this.getCourses(e.target.value)

  }
}
