import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Router } from '@angular/router';
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
  constructor(
    private transferDataService: TransferDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.transferDataService.currentData.subscribe(data => this.obj = data);
    this.transferDataService.currentSub.subscribe(data => this.path = data);
    this.transferDataService.currentCourse.subscribe(data => this.course = data);
    this.transferDataService.currentPosts.subscribe(data => this.post = data);
    console.log(this.course)
  }
  navigate(idCourse: string, course: string, idSub: string, sub: string): void {
    this.router.navigate([`/${sub}/${idSub}/${course}`, idCourse]);
    this.transferDataService.sendDataToStoragePost(null)

  }
}
