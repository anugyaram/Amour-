import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOccassionComponent } from './shop-occassion.component';

describe('ShopOccassionComponent', () => {
  let component: ShopOccassionComponent;
  let fixture: ComponentFixture<ShopOccassionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOccassionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOccassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
