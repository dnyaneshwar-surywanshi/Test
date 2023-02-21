import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DemoService } from './demo.service';
import { UtilityService } from './services/utility.service';
import { from, interval, of, Subscription, timer } from 'rxjs';
import { filter, map, mergeAll, mergeMap, take, takeLast, takeUntil, toArray } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';
import { PostService } from './services/post.service';
import { saveAs } from 'file-saver';
import { EmployeeService } from './shared/employee.service';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arrTest : any[] = [
    {
      name : {
      'firstName': "Dnyanesh",
      'lastname': "Surya"
      }
    },
    {
      salary: 2100000
    }
  ]
  
  title = 'Angular';
  CompExist: boolean = true;
  msg = 'From parent';
  
 sub1 : Subscription;
  products = {};
  post = {};
 
  names = {};
  randomNames = ['Dnyanesh', 'CodeMind', 'Angular', 'HTML', 'JavaScript', 'TypeScript'];
  userName ;

  private ExampleObject : {name: string, email?: string} 

  constructor(private empService: EmployeeService, private _demoService: DemoService, private utilityService: UtilityService, private postservice: PostService) {
   console.log('nested object', this.arrTest);


   
   this.names = this.arrTest[0]['name'];


console.log('namessss', this.names);
  this.utilityService.userName.subscribe(res => {
    this.userName = res;
  })
   
  this.ExampleObject = {
    name: 'Codemind',
    email: 'codemindtechnology@gmail.com'
  }

  }
  data;
  name:string;
  price:number;
  product: Product = new Product();
  handleData(v)
  {
 this.data = v.target.value;
  }
  updateProduct() {
    //this.product = new Product();
   this.product.name = this.name;
   this.product.price = this.price;
  }

  public uid: number;
  foods: string[] = [] ;
  getdatafromchild(data){
   this.foods.push(data);
  }
  
  ngOnInit(): void {
   
    this.empService.getPostDataFirebase().pipe(
      map( responseData => {
        const postArray = [] ;
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
           
            postArray.push({...responseData[key], id : key});
            
          }
        }
        return postArray;
      })
    ).subscribe( posts => {
      console.log('test firebase', posts);
    })

    // this.empService.getPostDataFirebase().subscribe(data=> {
    //   const res = JSON.stringify(data);

    //   console.log('test firebase', res)
    //    // this.empService.listDesignation=data;
    // });
    const jsonObject: object = {
      'City': [
        {
          'id': 1,
          'name': 'Basel',
          'founded': -200,
          'beautiful': true,
          'data': 123,
          'keywords': ['Rhine', 'River']
        },
        {
          'id': 1,
          'name': 'Zurich',
          'founded': 0,
          'beautiful': false,
          'data': 'no',
          'keywords': ['Limmat', 'Lake']
        }
      ]
    };


// const blob = new Blob([JSON.stringify(jsonObject)], {type : 'application/json'});
// console.log('test', blob);
// saveAs(blob, 'abc.json');
 
// this.utilityService.getImges().subscribe(res=> {
//   this.post = res;
// })
    
  //  this.utilityService.getPostById().subscribe(res => {
  //    console.log('getbypost id', res);

  //    //this.products = res;
  //  });



  //  this.utilityService.createPost('This is angular ui developer batch')
  //  .subscribe(
  //    res => {
  //      console.log('My post method' , res)
  //    }
  //  )


//   const brodCastVideos = interval(1000);
  
//  this.sub1 = brodCastVideos.pipe(
//    map(data => data * 2)
//  ).subscribe(res => {
//    console.log( res);
//   })


//  setTimeout(() => {
//    this.sub1.unsubscribe();
//  }, 10000);

// const data = from(this.utilityService.product)

// data.pipe(
//   map(data => data.name)
// )
// .subscribe(res => {
//   console.log(res);
// });


  // const source = from(this.utilityService.users);

  // source.pipe(
  //   filter(user => user.gender === 'Male')
  // ).subscribe(result => {
  //  console.log('users =>', result);
  // })

  // const data = from(this.randomNames);

  // data.pipe(
  //   take(1),
  //   takeLast(2)
  // ).subscribe(result => {
  //   console.log('Take = >', result);
  // });

  // const source = interval(1000);
  
  // let condition = timer(5000);
  //   source.pipe(
  //     takeUntil(condition)
  //   ).subscribe(result => {
  //     console.log('Take Until', result);
  //   })

 

   
   }



   creatPost() 
   {
     this.empService.createPost().subscribe(responseData => {
      console.log(responseData);
     })
   }


   DeletePost() {
     let id = "-NKi68jvD8qv9PB4Or5-" ;
    this.empService.deletePostById(id).subscribe(res => {
      console.log('test delete', res);
    })
   }

   getData(data) {
    return of(data + ' Video uploaded');
  }

  destroy() {
this.CompExist = false;
  }
  change() {
    this.ExampleObject.name = 'Angular UI Developer';
  }

  changeObject() {
 
    this.ExampleObject = {
      name: 'New Codemind',
      email: 'codemindtest@gmail.com'
    }
  }




}

