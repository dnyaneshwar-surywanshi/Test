import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodemindComponent } from './codemind.component';

describe('CodemindComponent', () => {
  let component: CodemindComponent;
  let fixture: ComponentFixture<CodemindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodemindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
