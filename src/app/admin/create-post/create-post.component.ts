import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
//Import FormBuilder
import { FormBuilder, FormGroup } from '@angular/forms'
//Posts service
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  public data
  public myForm: FormGroup;
  formValues
  constructor(
    private fb: FormBuilder,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: '',
      imageURL: '',
      description: '',
      courseModelID: '600d7c6b1bf06860543ca82f',
      subModelID: ''
    })
    this.myForm.valueChanges.subscribe(
      (data) => { this.formValues = data }
    )
  }
  save() {
    console.log(this.myForm.value)
    this.postService.submitPost(this.myForm.value).subscribe(data => {console.log(data)})
  }
  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data);
  }

}
