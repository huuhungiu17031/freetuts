import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseDetail } from '../model/course.model';
import { COURSE_URL } from './constants';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCourse(prefix?: String): Observable<CourseDetail[]> {
    return this.http.get<any>(COURSE_URL + `/${prefix}`).pipe(map(response => {
      return response['data']
    }))
  }
  detailCourse(id: String, prefix: String): Observable<CourseDetail> {
    return this.http.get<any>(COURSE_URL + `/${prefix}/${id}`).pipe(map(response => {
      return response['data'].map(data => {
        return new CourseDetail({
          id: data._id,
          title: data.title,
          description: data.description,
          subCategory: data.subCategory,
          posts: data.posts,
        })
      })
    })
    )
  }
}
