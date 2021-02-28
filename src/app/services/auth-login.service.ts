import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthLoginService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    return this.authService.watchUser.pipe(
      map((user) => {
        if (user.role === 'Admin') return true;
        this.router.navigate(['/admin/listPost']);
        return false;
      })
    )
  }
}
