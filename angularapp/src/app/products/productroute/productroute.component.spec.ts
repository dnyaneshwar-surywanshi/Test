import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrouteComponent } from './productroute.component';

describe('ProductrouteComponent', () => {
  let component: ProductrouteComponent;
  let fixture: ComponentFixture<ProductrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
