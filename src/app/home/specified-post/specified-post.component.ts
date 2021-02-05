import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specified-post',
  templateUrl: './specified-post.component.html',
  styleUrls: ['./specified-post.component.scss']
})
export class SpecifiedPostComponent implements OnInit {
  id: String;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.id = params.get('postID');
        console.log(this.id);
      })
  }

}
