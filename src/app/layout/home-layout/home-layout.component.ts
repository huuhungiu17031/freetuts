import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Router } from '@angular/router';
import { SubExerciseService } from 'src/app/services/sub-exercise.service';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  obj
  path
  course
  post: string
  isActive: any = true
  constructor(
    private transferDataService: TransferDataService,
    private router: Router,
    private subExerciseService: SubExerciseService,
  ) { }

  ngOnInit(): void {
    this.transferDataService.currentData.subscribe(data => this.obj = data);
    this.transferDataService.currentSub.subscribe(data => this.path = data);
    this.transferDataService.currentCourse.subscribe(data => this.course = data);
    this.transferDataService.currentPosts.subscribe(data => this.post = data);
    console.log(this.course)
    this.getState()
    // this.isActive = this.subExerciseService.stateSideBarValue

  }
  navigate(idCourse: string, course: string, idSub: string, sub: string): void {
    this.router.navigate([`/${sub}/${idSub}/${course}`, idCourse]);
    this.transferDataService.sendDataToStoragePost(null)
  }
  getState() {
    this.subExerciseService.currentStateSideBar.subscribe((res) => {
      this.isActive = res
    })
  }
}
