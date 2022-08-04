import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  method() {
    alert('Thanks for the subscribe');
  }
}
