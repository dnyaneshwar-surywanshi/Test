import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemocrudService {

  url = 'https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api';
  postURL = 'https://weather-embed.p.rapidapi.com/forecast/create';
  constructor(private httpClinet: HttpClient) { }

  getDataFromScience() {
    let headersRapidAPI = {
      'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
    'X-RapidAPI-Host': 'daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com'
    }
   return this.httpClinet.get(this.url, { headers: headersRapidAPI});
  }

  postRapidAPIMethod() {

   let data = {
    "city":"Vancouver",
    "country":"CA"
  };

  let  headers: {
      'content-type': 'application/json',
      'x-rapidapi-forward-key': 'RapidAPI Application Key',
      'X-RapidAPI-Key': '94a8280986mshe9ec28e5c69ac64p18404cjsnc967d1be0910',
      'Host': 'weather-embed.p.rapidapi.com'
    }
   return this.httpClinet.post(this.postURL, data , { headers: headers} ) ;
  }

  postDataJsonPlaceHolder() {
  
    let body = {
      "userId": 1000000,
      "id": 100000000,
      "title": "This is test post",
      "body": "this is dest body "
    }

   return this.httpClinet.post("https://jsonplaceholder.typicode.com/posts", body)
  }

  deletePostById(id: number) {
   return this.httpClinet.delete("https://jsonplaceholder.typicode.com/posts/"+ id);
  }

  updatePostById(postid: number) {

    let body = {
      "userId": 2000000,
      "id": 1,
      "title": "new title",
      "body": "new body "
    }
    return this.httpClinet.put("https://jsonplaceholder.typicode.com/posts/"+ postid, body);
  }

  // getDesignations():Observable<Designation[]>
  // {
  //   // const accesToken = localStorage.getItem('apikey');
  //   // const bearer = `Bearer $ {accesToken}` ;
  //   return this.myhttp.get<Designation[]>(this.designationUrl);
  // }
}
