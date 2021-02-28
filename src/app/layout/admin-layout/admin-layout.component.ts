import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  constructor(
   
  ) { }

  ngOnInit(): void {
    // const flag = this.getData()
    // this.isAdmin = flag
  }
  // getData() {
  //   return this.isAdmin = this.authService.currentUserValue
  // }
  // logout() {
  //   this.authService.logout()
  //   this.transferDataService.navigate('/admin/login')
  // }
}
