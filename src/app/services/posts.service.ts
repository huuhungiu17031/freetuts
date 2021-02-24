import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { POST_URL } from './constants';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  //data from list post component
  private storageListPosts = new BehaviorSubject<any>(null);
  currentListPost = this.storageListPosts.asObservable();

  private detailPostState = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentPost')));
  currentPost = this.storageListPosts.asObservable();

  constructor(private http: HttpClient) { }

  get currentUserValue(): any {
    return this.detailPostState.value;
  }

  updatePost(payload): Observable<any> {
    return this.http.put<any>(POST_URL + `/update/${payload._id}`, payload).pipe(map(response => {
      return response
    }))
  }

  getAllPost(prefix: String): Observable<any[]> {
    return this.http.get<any>(POST_URL + `/${prefix}`).pipe(map(response => {
      return response
    }))
  }
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
    return this.http.post<any>(POST_URL + `/add`, data).pipe(map(response => {
      return response['data']
    }))
  }


  sendDataToListPost(data) {
    this.storageListPosts.next(data)
    console.log(data)
  }


  delete(id) {
    let listPosts = this.storageListPosts.getValue();
    let listPostAfterDeleted = listPosts.filter(post => post._id !== id);
    this.storageListPosts.next(listPostAfterDeleted)
  }

  tranferPost(post) {
    localStorage.setItem('currentPost', JSON.stringify(post))
    this.detailPostState.next(post)
  }


}