import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { SubService } from '../../services/sub.service';
@Component({
  selector: 'app-sub-detail',
  templateUrl: './sub-detail.component.html',
  styleUrls: ['./sub-detail.component.scss']
})
export class SubDetailComponent implements OnInit {
  data: any;
  courses: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private detail: SubService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => this.detail.detailSubCategory(params.get('subID'))),
        tap(data => console.log(data[0])),
      )
      .subscribe(
        data => this.data = data[0]
      )
      console.log(this.courses)
  }
}
