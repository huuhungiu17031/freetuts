import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import { SubService } from '../../services/sub.service';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-sub-detail',
  templateUrl: './sub-detail.component.html',
  styleUrls: ['./sub-detail.component.scss']
})
export class SubDetailComponent implements OnInit {
  data: any;
  courses: any
  posts: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private detail: SubService,
    private transferDataService: TransferDataService,

  ) { }

  ngOnInit(): void {

  }
}
