import { Component, OnInit } from '@angular/core';
import { DemocrudService } from '../services/democrud.service';

@Component({
  selector: 'app-democrud',
  templateUrl: './democrud.component.html',
  styleUrls: ['./democrud.component.css']
})
export class DemocrudComponent implements OnInit {

  pwd='123456789';
  arrData: any[] = [];
  constructor(private dmeocrudService: DemocrudService) { }

  ngOnInit() {

    this.dmeocrudService.getDataFromScience().subscribe(res => {
      console.log('get rapid', res['co2']);
      this.arrData = res['co2'];
    });

    this.dmeocrudService.postDataJsonPlaceHolder().subscribe(res => {
      console.log('json place holder',res);
    })
  }

  deletePostByIdsss()
  {
    this.dmeocrudService.deletePostById(1).subscribe(res => {
      console.log('delete post', res);
    })
  }

  updetePostByIds() {
    this.dmeocrudService.updatePostById(1).subscribe(res => {
      console.log('update', res);
    })
  }
}
