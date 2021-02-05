import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
 
  }

}
