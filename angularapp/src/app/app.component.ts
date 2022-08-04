import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DemoService } from './demo.service';
import { UtilityService } from './services/utility.service';
import { from, interval, of, Subscription, timer } from 'rxjs';
import { filter, map, mergeAll, mergeMap, take, takeLast, takeUntil, toArray } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';
import { PostService } from './services/post.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Angular';
  CompExist: boolean = true;
  msg = 'From parent';
  
 sub1 : Subscription;
  products = {};
  post = {};

  randomNames = ['Dnyanesh', 'CodeMind', 'Angular', 'HTML', 'JavaScript', 'TypeScript'];
  userName ;

  private ExampleObject : {name: string, email?: string} 

  constructor(private _demoService: DemoService, private utilityService: UtilityService, private postservice: PostService) {
   
  this.utilityService.userName.subscribe(res => {
    this.userName = res;
  })
   
  this.ExampleObject = {
    name: 'Codemind',
    email: 'codemindtechnology@gmail.com'
  }

  }
  ngOnInit(): void {


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

 

   const source = from(['Tech', 'Comedy', 'News']);

    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
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

