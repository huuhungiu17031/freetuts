import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
  @Input() data: any;
  listCourse: Array<any>
  constructor(
    private courseService: CourseService,
    private transferDataService: TransferDataService,
  ) { }



  ngOnInit(): void {
    this.getCourse(this.data.id)
    console.log("heelo", this.data.id)
  }


  navigate(id) {
    let URL = `sub/${this.data.id}/subCourse`
    this.transferDataService.navigate(URL, id)
  }
  private getCourse(id: string) {
    let URL = `listCourse/${id}`
    this.courseService.getAllCourse(URL).subscribe(res => {
      // console.log("special", res)
      this.listCourse = res
    })
  }
}
