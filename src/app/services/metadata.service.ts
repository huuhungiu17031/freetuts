import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryDetail } from '../model/category.model';
import { CATEGORY_URL } from './constants';
@Injectable({
  providedIn: 'root'
})
export class MetadataService {


  constructor(private http: HttpClient) {

  }

  getCategory(): Observable<CategoryDetail[]> {
    return this.http.get<any>(CATEGORY_URL + '/list').pipe(map(response => {
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
