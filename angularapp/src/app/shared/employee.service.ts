import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';
import { Designation, Epmloyee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private myhttp:HttpClient) { }
 // employeeUrl:string='https://zap-pest.com/api/Employee';   
 // designationUrl:string='https://zap-pest.com/api/Designation';  
  employeeUrl:string='http://localhost:34110/api/Employee';
  designationUrl:string='http://localhost:34110/api/Designation';  
  //empUrl: string = "https://products-3775b-default-rtdb.firebaseio.com";
  //desigUrl: string = "https://newproject-dc333-default-rtdb.firebaseio.com/channels";
  listEmployee:Epmloyee[]=[]; //For Getting Data EmployeeList
  listDesignation:Designation[]=[];
  employeeData:Epmloyee=new Epmloyee(); //for post data / Insert data

  firebaseUrl = 'https://angcrud-d7237-default-rtdb.firebaseio.com/';

  createPost() {
    let postData = {
      titile : "This  crud new ",
      content : "This is test firebase post"
    }
  
   return this.myhttp.post(this.firebaseUrl + 'posts.json', postData);
  }

  deletePostById(id: any) {
    return this.myhttp.delete(this.firebaseUrl+ 'posts.json', id);
  }

  getPostDataFirebase() {
    return this.myhttp.get(this.firebaseUrl + 'posts.json');
  }
// map
// pipe
  saveEmployee()
  {
    // const accesToken = localStorage.getItem('apikey');
    // const bearer = `Bearer $ {accesToken}` ;
    return this.myhttp.post(`${this.employeeUrl}`, this.employeeData)
  }
  updateEmployee()
  {
    // const accesToken = localStorage.getItem('apikey');
    // const bearer = `Bearer $ {accesToken}` ;
    return this.myhttp.put(`${this.employeeUrl}/${this.employeeData.id}` ,this.employeeData);
  }
  getEmployees():Observable<Epmloyee[]>
  {
    // const accesToken = localStorage.getItem('apikey');
    // const bearer = `Bearer $ {accesToken}` ;
    return this.myhttp.get<Epmloyee[]>(this.employeeUrl);
  }
  getDesignations():Observable<Designation[]>
  {
    // const accesToken = localStorage.getItem('apikey');
    // const bearer = `Bearer $ {accesToken}` ;
    return this.myhttp.get<Designation[]>(this.designationUrl);
  }
  // fetchDesignations() {
  //   return this.myhttp.get(this.desigUrl, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  // }
  deleteEmployee(id:number)
  {
    // const accesToken = localStorage.getItem('apikey');
    // const bearer = `Bearer $ {accesToken}` ;
    return this.myhttp.delete(`${this.employeeUrl}/${id}`);

    //return this.myhttp.delete(`https://jsonplaceholder.typicode.com/`+ '/posts/1')
  }
 }