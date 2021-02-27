import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { COURSE_DETAIL_URL } from './constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {

  constructor(
    private http: HttpClient
  ) { }


  getWithId(URL,id) {
    return this.http.get<any>(COURSE_DETAIL_URL + `/${URL}/${id}`).pipe(map(response => {
      return response
    }))
  }
}
