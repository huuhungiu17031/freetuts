import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../services/metadata.service';
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
    private transferDataService: TransferDataService,

  ) { }

  ngOnInit(): void {
    this.metadata.getCategory().subscribe(
      (category) => {
        this.$category = category
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
    this.transferDataService.sendDataToStoragePost(null)
    this.transferDataService.navigate(prefix, id);
  }

  navigateToHome() {
    this.transferDataService.sendDataToStorageSub(null)
    this.transferDataService.navigate('/');
    
  }
  navigate_course(idCourse: string, course: string, idSub: string, sub: string): void {
    let URL = `${sub}/${idSub}/${course}`
    this.transferDataService.navigate(URL, idCourse);
  }
}
