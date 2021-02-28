import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isAdmin

  constructor(
    private authService: AuthService,
    private transferDataService: TransferDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const flag = this.getData()
    this.isAdmin = flag
  }
  logout() {
    this.authService.logout()
    // this.transferDataService.navigate('/admin')
    this.router.navigate(['/admin/login'])
  }
  getData() {
    return this.isAdmin = this.authService.currentUserValue
  }
}
