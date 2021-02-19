import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Number>();
  btnNum: Number = 4
  constructor() { }

  ngOnInit(): void {
  }
  pagination(pageNum: Number): void {
    // this.getPostOfSub(pageNum)
    console.log(pageNum)
    this.newItemEvent.emit(pageNum);
  }
}
