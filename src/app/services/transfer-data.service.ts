import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private storageData = new BehaviorSubject<any>(null);
  private storageSub = new BehaviorSubject<any>(null);
  private storageCourse = new BehaviorSubject<any>(null);
  private storagePosts = new BehaviorSubject<any>(null);
  private storageComment= new BehaviorSubject<any>(null);

  


  currentData = this.storageData.asObservable();
  currentSub = this.storageSub.asObservable();
  currentCourse = this.storageCourse.asObservable();
  currentPosts = this.storagePosts.asObservable();

  curentComment = this.storageComment.asObservable();



  constructor(
    private router: Router,
  ) { }

  get commentFromStorage(): any {
    return this.storageComment.value
  }
  sendDataToStorage(data: any) {
    this.storageData.next(data);
    console.log(data);
  }
  sendDataToStorageSub(data: any) {
    this.storageSub.next(data);
    console.log(data);
  }
  sendDataToStorageCourse(data: any) {
    this.storageCourse.next(data);
    console.log(data);
  }
  sendDataToStoragePost(data: any) {
    this.storagePosts.next(data);
  }

  sendDataToStorageComment(data: any) {
    this.storageComment.next(data);
  }

  navigate(URL: string, id?: string) {
    if (!id) this.router.navigate([URL])
    this.router.navigate([`${URL}`, id])
  }




}
