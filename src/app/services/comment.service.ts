import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { COMMENT_URL } from './constants'
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  //GET DATA FROM THE COMPONENT COMMENT DETAIL (1)
  private storageDetailedComment = new BehaviorSubject<any>(null);
  currentDetailedComment = this.storageDetailedComment.asObservable();


  constructor(
    private http: HttpClient
  ) { }
  //(1)
  sendCurrentDetailedComment(data) {
    this.storageDetailedComment.next(data)
    console.log(data)
  }
  //(1)
  get value_storageDetailedComment(): any {
    return this.storageDetailedComment.value;
  }

  deleteCommentUI(id) {
    let arrCmt = [...this.storageDetailedComment.getValue()]
    arrCmt = arrCmt.filter(comment => comment._id !== id)
    this.storageDetailedComment.next(arrCmt)
  }

  getCommentFromPost(id): Observable<any> {
    return this.http.get<any>(COMMENT_URL + `/list/${id}`).pipe(map(res => {
      return res
    }))
  }

  postComment(comment): Observable<any> {
    return this.http.post<any>(COMMENT_URL + `/add`, comment).pipe(map(res => {
      return res
    }))
  }
  deleteComment(id): Observable<any> {
    return this.http.delete<any>(COMMENT_URL + `/delete/${id}`).pipe(map(res => {
      return res
    }))
  }

  updateComment(comment): Observable<any> {
    return this.http.put<any>(COMMENT_URL + `/update/${comment._id}`, comment).pipe(map(res => {
      return res
    }))
  }
}
