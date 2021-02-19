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

  postsOnCourse(id: String, prefix: String, pageNum: any): Observable<any[]> {
    return this.http.get<any>(POST_URL + `/${prefix}/${id}/?page=${pageNum}`).pipe(map(response => {
      console.log(POST_URL + `/${prefix}/${id}/?page=${pageNum}`)
      return response['data']
    }))
  }
  submitPost(data): Observable<any[]> {
    return this.http.post<any>(POST_URL + `/add`,data).pipe(map(response => {
      return response['data']
    }))
  }
}