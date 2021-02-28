import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SUB_EXERCISE_URL, EXERCISE_URL } from './constants';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubExerciseService {
  private stateSideBar = new BehaviorSubject<any>(true);
  currentStateSideBar = this.stateSideBar.asObservable()

  private stateDataSideBar = new BehaviorSubject<any>(null);
  currentStateDataSideBar = this.stateDataSideBar.asObservable();


  constructor(
    private http: HttpClient
  ) { }

  sendDataToSideNav(data) {
    this.stateDataSideBar.next(data);

  }

  sendStateToSideBar(state: boolean) {
    this.stateSideBar.next(state)
    console.log(state)
  }

  getWithId(URL, id): Observable<any[]> {
    return this.http.get<any>(SUB_EXERCISE_URL + `/${URL}/${id}`).pipe(map(response => {
      return response
    }))
  }
  getExerciseWithId(URL, id): Observable<any[]> {
    return this.http.get<any>(EXERCISE_URL + `/${URL}/${id}`).pipe(map(response => {
      return response
    }))
  }

  getSubExerciseWithPagination(URL?: string): Observable<any[]> {
    return this.http.get<any>(SUB_EXERCISE_URL + `/${URL}`).pipe(map(res => {
      return res
    }))
  }

}
