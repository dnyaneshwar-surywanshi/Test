import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private url = 'https://jsonplaceholder.typicode.com/posts/'; 

  //private getImgessss = 'https://lcoalhost?5300/getimges';
   
  userName = new Subject<any>();
 // userName = new BehaviorSubject('Codemind Technology')

  product = [ 
    {name: 'Laptop', id:'001'},
    {name: 'Mobile', id: '002'},
    {name: 'TV', id: '003'}
  ]

  users = [
    {
      name: 'Dnyanesh', id: '101', gender: 'Male'
    },
    {
      name: 'Test', id: '102', gender: 'Female'
    },
    {
      name: 'John', id: '103', gender: 'Male'
    }
  ]
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {

    
   }

  
   getUsers() : Observable<any> {
     return this.httpClient.get(this.url);
     // 10 users
   }

  getPost() : Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/');
  }

  getPostById(): Observable<any> {
    let id: number = 2;
    //let firstname = 'Codemind';
    let endPoints= "/posts/" + id;
    return this.httpClient.get(this.url +endPoints ) ;
  }

 

  createPost(post) {  
    return this.httpClient.post(this.url, JSON.stringify(post))  
  }  
 
  // updatePost(post){  
  //   return this.httpClient.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))  
  // } 

  updatePost(id, post): Observable<any> {

    let newpost = {
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title: 'update post',
      userId: 1

    }
    return this.httpClient.put<any>(this.url  + id, JSON.stringify(newpost), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
//  getImges() : Observable<any> {
//   return null;
// }
}
