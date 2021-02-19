import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubService } from '../../services/sub.service';
import { TransferDataService } from '../../services/transfer-data.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  data: any;
  courses: any
  posts: any
  defaultPage: number = 1
  numberOfPages: number


  constructor(
    private activatedRoute: ActivatedRoute,
    private transferDataService: TransferDataService,
    private detail: SubService,
  ) { }

  ngOnInit(): void {
    this.getSubInfor();
    this.getPostOfSub(this.defaultPage)
  }
  getSubInfor() {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.detail.detailSubCategory(params.get('subID'), "listAds")),
      )
      .subscribe(
        (data) => {
          this.data = data[0]
          this.courses = this.data.courses

          this.transferDataService.sendDataToStorage(this.courses)
          this.transferDataService.sendDataToStorageSub(this.data)
        }
      )
  }

  getPostOfSub(num) {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.detail.allPostInOneSub(params.get('subID'), "postOfSub", num)),
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.posts = data['data'];
          this.numberOfPages = data['length'];
          console.log(this.numberOfPages)
        }
      )
  }

  navigate(id_post: string, id_sub: string) {
    // let URL = `${prefix}/${id_sub}/${suffix}`;
    let URL = `sub/${id_sub}/post`;
    this.transferDataService.sendDataToStoragePost(null)
    this.transferDataService.navigate(URL, id_post)
  }


  paginationEvent(pageNum: number) {
    // console.log("Parent", pageNum)
    this.getPostOfSub(pageNum)
  }


}
