import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../services/metadata.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  $category: any
  $course: any
  constructor(private metadata: MetadataService) { }

  ngOnInit(): void {
    this.metadata.getCategory().pipe(
      tap((data) => { console.log(data) })
    ).subscribe(
      category => this.$category = category
    )

  }



}
