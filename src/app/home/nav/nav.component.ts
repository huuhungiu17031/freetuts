import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../services/metadata.service';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  $category: any
  $course: any
  constructor(
    private metadata: MetadataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.metadata.getCategory().pipe(
      tap((data) => { console.log(data) })
    ).subscribe(
      category => this.$category = category
    )
  }


  navigateToSubmenu(id) {
    this.router.navigate(['/sub', id]);
  }


  navigateToCourse(id) {
    this.router.navigate(['/course', id]);
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
}
