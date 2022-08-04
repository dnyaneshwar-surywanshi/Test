import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnagedetectionComponent } from './chnagedetection.component';

describe('ChnagedetectionComponent', () => {
  let component: ChnagedetectionComponent;
  let fixture: ComponentFixture<ChnagedetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChnagedetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChnagedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
