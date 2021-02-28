import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubExerciseService } from 'src/app/services/sub-exercise.service';
import { mergeMap, tap } from 'rxjs/operators';
import { CourseDetailService } from 'src/app/services/course-detail.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  renderMaterial
  public Editor = ClassicEditor;
  public myForm: FormGroup;

  constructor(
    private subExerciseService: SubExerciseService,
    private activatedRoute: ActivatedRoute,
    private courseDetailService: CourseDetailService,
  ) { }

  ngOnInit(): void {
    this.form()
    this.getExercise()
  }

  form() {
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
        postModelID: new FormControl('', [
          Validators.required
        ])
      })
  }


  getExercise() {
    let URL = 'detail'
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.subExerciseService.getWithId(URL, params.get('id'))),
      )
      .subscribe(res => {
        this.renderMaterial = res['data'];
        console.log(res['data'])
        this.getSideBar(this.renderMaterial.exerciseModelId)
      }
      )
  }
  getSideBar(id) {
    this.subExerciseService.getExerciseWithId("list", id).subscribe(res => {
      this.subExerciseService.sendStateToSideBar(false)
      // console.log()
      this.getAll(res['data'][0].courseDetailModelId)
    })
  }

  getAll(id) {
    let URL = 'allExercise'
    this.courseDetailService.getWithId(URL, id)
      .subscribe(res => {
        this.subExerciseService.sendDataToSideNav(res['data'])
        console.log(res)
      }
      )
  }
  ngOnDestroy() {
    this.subExerciseService.sendStateToSideBar(true)
  }


  save() {
    console.log(this.myForm.value);
    // this.form(this.id)
    // let payload = this.myForm.value
    // this.commentService.postComment(payload).subscribe(
    //   (res) => {
    //     this.sweetAlertService.successBox(`Đăng bài thành công. ${payload.name} đợi Hưng đẹp trai duyệt bài nhe!!!`)
    //   },
    //   (err) => {
    //     this.sweetAlertService.error(`${payload.name} vui lòng thử lại!`)
    //   }
    // )
  }
}
