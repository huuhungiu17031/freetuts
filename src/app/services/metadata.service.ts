import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryDetail } from '../model/category.model';
import { CourseDetail } from '../model/course.model';
import { SubDetail } from '../model/sub.model';
@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  private CATEGORY_URL: string = "http://localhost:3000/category/list"
  private COURSE_URL: string = "http://localhost:3000/course/list"
  private SUB_URL: string = "http://localhost:3000/sub/list"

  constructor(private http: HttpClient) {

  }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  }

  getCategory(): Observable<CategoryDetail[]> {
    return this.http.get<any>(this.CATEGORY_URL).pipe(map(response => {
      return response['list_category'].map(item => {
        return new CategoryDetail({
          id: item._id,
          title: item.title,
          children: item.children
        })
      })
    }))
  }


}
