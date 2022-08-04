import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

 // apiUrl = 'https://jsonplaceholder.typicode.com/users';
 postURL = 'https://jsonplaceholder.typicode.com/posts';

 url: string;
  constructor(private httpClient: HttpClient) { 
    this.url = "https://jsonplaceholder.typicode.com";
  }

  method() {
    alert('This is test service call');
  }

  product = [
    {name: 'Laptop', id:"001"},
    {name: 'Mobile', id:"002"},
    {name: 'TV', id:"003"},

  ]

  getUsers() : Observable<any> {

    return this.httpClient.get(this.postURL);
  }

  public getPosts(){
      this.httpClient.get(this.url);
  }

  public getPostById() : Observable<any> {
    let id: number = 1;
    let endPoints = "/posts/" + id;
    return this.httpClient.get(this.url + endPoints);
  }

  createPost(title) : Observable<any> {
    let endPoints = "/posts/"
   return this.httpClient.post<any>(this.url + endPoints, { title })
  }

  public updatePost(postData: Object) {
    let endPoints = "/posts/1"
    this.httpClient.put(this.url + endPoints, postData);
  }

  public deletePost(id) {
    let endPoints = "/posts/" + id;
    return this.httpClient.delete(this.url + endPoints);
  }

}
