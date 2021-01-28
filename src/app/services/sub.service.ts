import { SubDetail } from './../model/sub.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SUB_URL } from './constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(
    private http: HttpClient
  ) { }
  detailSubCategory(id: String): Observable<SubDetail> {
    return this.http.get<any>(SUB_URL + `/list/${id}`).pipe(map(response => {
      return response['data'].map(data => {
        return new SubDetail({
          id: data._id,
          title: data.title,
          description: data.description,
          category: data.category,
          courses: data.courses
        })
      })
    })
    )
  }
}