import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private authService: AuthService,
    private sweetAlertService: SweetAlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login() {
    let account = {
      "username": this.username,
      "password": this.password
    }
    this.authService.login('login', account).subscribe(res => {
      this.sweetAlertService.successBox(res['message'])
      localStorage.setItem('current_user', JSON.stringify(res['data']));
      this.authService.sendCurrentUser(res['data'])
      this.router.navigate(['/admin/listPost/'])
    },

    );
  }
}
