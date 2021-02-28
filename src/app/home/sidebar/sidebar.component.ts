import { Component, OnInit } from '@angular/core';
import { SubExerciseService } from 'src/app/services/sub-exercise.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  defaultExercise: number = 1
  listExercise
  constructor(
    private subExerciseService: SubExerciseService,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.getExercise(this.defaultExercise)
  }
  getExercise(num) {
    let URL = `list/?page=${num}`
    this.subExerciseService.getSubExerciseWithPagination(URL).subscribe(response => {
      this.listExercise = response['data']
    })
  }
  navigate(id) {
    let URL = `exercise/${id}`
    this.transferDataService.navigate(URL)
  }
}
