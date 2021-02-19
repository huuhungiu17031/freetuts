import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
//Import FormBuilder
import { FormBuilder, FormGroup } from '@angular/forms'
//Posts service
import { PostsService } from '../../services/posts.service';
import { SubService } from 'src/app/services/sub.service';
import { CourseService } from '../../services/course.service';
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
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.handleFormSubmit();
    this.getAllCourse();
    this.getAllSub();
  }

  getAllCourse() {
    this.courseService.getAllCourse('list').subscribe((data) => {
      this.listCourse = data;
    })
  }
  getAllSub() {
    this.subService.getAllSub('list').subscribe((data) => {
      this.listSub = data
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
    this.myForm.valueChanges.subscribe(
      (data) => {
        this.formValues = data;
      }
    )
  }
  save() {
    this.postService.submitPost(this.myForm.value).subscribe(data => { console.log(data) })
  }
  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data);
  }

}
