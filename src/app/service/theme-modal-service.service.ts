import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeModalServiceService {

  private isOpenModal = new BehaviorSubject<boolean>(false);

  isOpen$ = this.isOpenModal.asObservable();

  open(){
    this.isOpenModal.next(true);
  }
  close() {
    this.isOpenModal.next(false);
  }
  constructor() { }
}
