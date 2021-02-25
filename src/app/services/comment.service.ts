import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { COMMENT_URL } from './constants'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }
  getCommentFromPost(id): Observable<any> {
    return this.http.get<any>(COMMENT_URL + `/list/${id}`).pipe(map(res => {
      return res
    }))
  }
}
