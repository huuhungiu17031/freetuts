import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Input() item: any;
  sss: any
  constructor() { }

  ngOnInit(): void {
   console.log(this.item)
  }
}
