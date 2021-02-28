import { Component, OnInit } from '@angular/core';
import { SubExerciseService } from 'src/app/services/sub-exercise.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';

@Component({
  selector: 'app-exercise-side-bar',
  templateUrl: './exercise-side-bar.component.html',
  styleUrls: ['./exercise-side-bar.component.scss']
})
export class ExerciseSideBarComponent implements OnInit {
  data
  constructor(
    private subExerciseService: SubExerciseService,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.subExerciseService.currentStateDataSideBar.subscribe((res) => {
      this.data = res
      // console.log(this.data)
    })
  }
  navigate(id) {
    let URL = `exercise`
    this.transferDataService.navigate(URL, id)
  }
}
