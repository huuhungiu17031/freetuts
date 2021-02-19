import { Component, OnInit } from '@angular/core';
declare var $: any;
import { CourseService } from 'src/app/services/course.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SubService } from '../../services/sub.service';
import { TransferDataService } from '../../services/transfer-data.service';
import { SubDetail } from '../../model/sub.model';
@Component({
  selector: 'app-infor-box',
  templateUrl: './infor-box.component.html',
  styleUrls: ['./infor-box.component.scss']
})
export class InforBoxComponent implements OnInit {

  subCategory$: Array<SubDetail>;
  freeCode$: any;

  latestContent: any;
  remainContent: any;
  //Options carousel
  customOptions: OwlOptions = {

    navSpeed: 700,
    margin: 5,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  }
  constructor(
    // private courseService: CourseService,
    private subService: SubService,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    // const course = this.courseService.detailCourse(this.idcourse, 'list')
    //   .pipe(map(data => data[0]));
    // const allPosts = this.detail.allPostInSub("listAds")
    // forkJoin([course, allPosts])
    //   .subscribe(results => {
    //     this.course = results[0];
    //     this.allPosts = results[1];
    //   });
    this.handleFreeCode()
    this.getPost()

  }


  getPost() {
    this.subService.allPostInSub('list').subscribe(results => {
      this.subCategory$ = this.filter(results)
      console.log("Sub", this.subCategory$)
    })
  }
  // filter idProgrammingCategory out of the array
  filter(data: any) {
    let newData = []
    const idProgrammingCategory = "600d71151bf06860543ca7fc"
    for (let item of data) {
      if (item.title === "Mã giảm giá") {
        this.freeCode$ = item
        console.log("Freecode",this.freeCode$)
      }
      if (item.category !== idProgrammingCategory && item.title !== 'Chuyên đề' && item.title !== "Mã giảm giá") {
        newData.push(item)
      }
    }
    return newData
  }


  handleFreeCode() {
    const idFreeCategory = "600d7b0e1bf06860543ca81b"

    this.subService.allPostInOneSub(idFreeCategory, 'postOfSub').subscribe(res => {
      this.freeCode$ = res['data'];

      console.log("freecode", this.freeCode$)

    })
  }
  redirectToSub(prefix, id) {
    this.transferDataService.navigate(prefix, id);
  }




}