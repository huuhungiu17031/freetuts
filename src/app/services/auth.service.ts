import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER_URL } from './constants';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('current_user')));
  currentUser = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  get watchUser(): Observable<any> {
    return this.currentUser.pipe(map(u => {
      if (!u) { return ''; }
      return u;
    }))
  }

  login(prefix, data): Observable<any> {
    return this.http.post<any>(USER_URL + `/${prefix}`, data).pipe(map(response => {
      return response
    })
    )
  }
  sendCurrentUser(data) {
    this.currentUserSubject.next(data)
  }
  logout() {
    localStorage.removeItem('current_user')
    this.currentUserSubject.next(null);
  };

}
