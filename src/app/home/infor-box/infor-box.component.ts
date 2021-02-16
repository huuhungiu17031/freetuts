import { AfterViewInit, Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
import { CourseService } from 'src/app/services/course.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs'
import { SubService } from '../../services/sub.service';
import { TransferDataService } from '../../services/transfer-data.service';
import { SubDetail } from '../../model/sub.model';
@Component({
  selector: 'app-infor-box',
  templateUrl: './infor-box.component.html',
  styleUrls: ['./infor-box.component.scss']
})
export class InforBoxComponent implements OnInit {



  subCategory$: Array<SubDetail>
  constructor(
    private courseService: CourseService,
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
    this.getPost()
  }


  getPost() {
    this.subService.allPostInSub('list').subscribe(results => {
      this.subCategory$ = this.filter(results)
      console.log(this.subCategory$)
    })
  }
  // filter idProgrammingCategory out of the array
  filter(data: any) {
    let newData = [...data];
    const idProgrammingCategory = "600d71151bf06860543ca7fc"
    const idFreeCategory = "600d7b0e1bf06860543ca81b"
    newData = newData.filter(item => item.category !== idProgrammingCategory  )
    return newData
  }

  redirectToSub(prefix, id) {
    this.transferDataService.navigate(prefix, id);
  }

  // ngAfterViewInit(): void {
  //   this.owlCarousel();
  // }


  //   owlCarousel() {
  //     $('.owl-carousel').owlCarousel({
  //       loop: true,
  //       margin: 5,
  //       dots: false,
  //       responsiveClass: true,
  //       responsive: {
  //         0: {
  //           items: 1,
  //         },
  //         600: {
  //           items: 2,
  //         },
  //         1000: {
  //           items: 3,
  //         }
  //       }
  //     })
  //   }
  // }
}