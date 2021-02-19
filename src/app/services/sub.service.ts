import { SubDetail } from './../model/sub.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { POST_URL, SUB_URL } from './constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(
    private http: HttpClient
  ) { }
  getAllSub(prefix?: String): Observable<SubDetail> {
    return this.http.get<any>(SUB_URL + `/${prefix}`).pipe(map(response => {
      return response['data']
    }))
  }

  detailSubCategory(id?: String, prefix?: String): Observable<SubDetail> {
    return this.http.get<any>(SUB_URL + `/${prefix}/${id}`).pipe(map(response => {
      return response['data'].map(data => {
        return new SubDetail({
          id: data._id,
          title: data.title,
          description: data.description,
          category: data.category,
          courses: data.courses,
          posts: data.posts
        })
      })
    })
    )
  }

  allPostInSub(prefix: String): Observable<any> {
    return this.http.get<any>(SUB_URL + `/${prefix}`).pipe(map(response => {
      return response['data']
    })
    )
  }

  allPostInOneSub(id: String, prefix: String, pageNum?: any): Observable<any> {
    return this.http.get<any>(POST_URL + `/${prefix}/${id}/?page=${pageNum}`).pipe(map(response => {
      return response
    })
    )
  }
}
