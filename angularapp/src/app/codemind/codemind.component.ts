import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-codemind',
  templateUrl: './codemind.component.html',
  styleUrls: ['./codemind.component.css']
})
export class CodemindComponent  {

  @Input() employeeName: string;

  @Output() thanks = new EventEmitter<string> ();

  title: string ="Top 3 Bollywood Movies" ;  
  movies: any[] =[  
      {title:'3 Idiots',director:'Rajkumar Hirani',cast:'Amir khan',releaseDate:'2009'},  
      {title:'Lagaan',director:'Ashutosh Gowariker',cast:'Amir khan',releaseDate:'2001'},  
      {title:'Tanhaji: The Unsung Warrior',director:'Om Raut',cast:'Ajay Devgan',releaseDate:'2020'},  
  ]  

  selectedProduct: string;

  sendData() {
    this.thanks.emit('Thank you');
  }

  getProductValue(value) {
    console.log(value.target.value);
    this.selectedProduct = value.target.value;
  }

}
class Movie {  
  title : string;  
  director : string;  
  cast : string;  
  releaseDate : string;  
}  
