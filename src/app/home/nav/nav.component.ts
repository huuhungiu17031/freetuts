import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../services/metadata.service';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TransferDataService } from '../../services/transfer-data.service';
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
    private router: Router,
    private transferDataService: TransferDataService,

  ) { }

  ngOnInit(): void {
    this.metadata.getCategory().pipe(
      tap((data) => { console.log(data) })
    ).subscribe(
      (category) => {
        this.$category = category

      },
    )
  }
  navigate(id?: string, prefix?: string): void {
    if (prefix === 'sub') {
      this.transferDataService.sendDataToStorageCourse(null)
    }
    this.router.navigate([`/${prefix}`, id]);
  }

  navigateToHome() {
    this.router.navigate(['']);
    this.transferDataService.sendDataToStorageSub(null)
  }
}
