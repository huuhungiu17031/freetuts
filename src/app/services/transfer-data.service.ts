import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private storageData = new BehaviorSubject<any>(null);
  private storageSub = new BehaviorSubject<any>(null);
  private storageCourse = new BehaviorSubject<any>(null);
  currentData = this.storageData.asObservable();
  currentSub = this.storageSub.asObservable();
  currentCourse = this.storageCourse.asObservable();
  constructor() { }


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
}
