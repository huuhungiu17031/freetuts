import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../services/metadata.service';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TransferDataService } from '../../services/transfer-data.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  $category: any
  $course: any
  constructor(
    private metadata: MetadataService,
    private router: Router,
    private transferDataService: TransferDataService,

  ) { }

  ngOnInit(): void {
    this.metadata.getCategory().pipe(
      tap((data) => { console.log(data) })
    ).subscribe(
      (category) => {
        this.$category = category
        // this.interateObject(category)
        console.log(this.$category)
      },
    )
  }

  interateObject(obj: any): void { //recursive function to crawl nested data
    for (let prop in obj) {
      if (typeof obj[prop] == "object") {
        this.interateObject(obj[prop])
        console.log(prop.toUpperCase() + ': ', obj[prop]);
      } else {
        if (prop) {
          console.log(prop.toUpperCase() + ': ', obj[prop]);
        }
      }
    }
  }


  navigate(id?: string, prefix?: string): void {
    if (prefix === 'sub') {
      this.transferDataService.sendDataToStorageCourse(null)
    }
    this.router.navigate([`/${prefix}`, id]);
  }

  navigateToHome() {
    this.router.navigate(['']);
    this.transferDataService.sendDataToStorageSub(null)
  }
  navigate_course(idCourse: string, course: string, idSub: string, sub: string): void {
    this.router.navigate([`/${sub}/${idSub}/${course}`, idCourse]);
  }
}
