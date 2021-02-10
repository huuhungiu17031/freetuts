import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubService } from '../../services/sub.service';
import { TransferDataService } from '../../services/transfer-data.service';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  data: any;
  courses: any
  posts: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private detail: SubService,
    private router: Router,
    private transferDataService: TransferDataService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap((params) => this.detail.detailSubCategory(params.get('subID'), "listAds")),
        tap(data => console.log(data[0])),
      )
      .subscribe(
        (data) => {
          this.data = data[0]
          this.courses = data[0].courses
          this.posts = data[0].posts;
          this.transferDataService.sendDataToStorage(this.courses)
          this.transferDataService.sendDataToStorageSub(this.data)
        }
      )
  }


}
