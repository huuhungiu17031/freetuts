import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  login() {
    let account = {
      "username": this.username,
      "password": this.password
    }
    this.authService.login('login', account).subscribe(res => {
      console.log(res);
      console.log(account)
      if (res.token) this.authService.setCookie('token', res.token, 1);
    });
  }
}
