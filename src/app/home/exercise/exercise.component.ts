import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubExerciseService } from 'src/app/services/sub-exercise.service';
import { mergeMap, tap } from 'rxjs/operators';
import { CourseDetailService } from 'src/app/services/course-detail.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  renderMaterial
  // videoURL
  constructor(
    private subExerciseService: SubExerciseService,
    private activatedRoute: ActivatedRoute,
    private courseDetailService: CourseDetailService,
  ) { }

  ngOnInit(): void {
    this.getExercise()

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
}
