import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chnagedetection',
  templateUrl: './chnagedetection.component.html',
  styleUrls: ['./chnagedetection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChnagedetectionComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
