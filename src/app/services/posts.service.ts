import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { POST_URL } from './constants';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  detailCourse(id?: String, prefix?: String): Observable<any[]> {
    return this.http.get<any>(POST_URL + `/${prefix}/${id}`).pipe(map(response => {
      return response['data']
    }))
  }
}