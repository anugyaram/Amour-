import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeryCollectionComponent } from './luxery-collection.component';

describe('LuxeryCollectionComponent', () => {
  let component: LuxeryCollectionComponent;
  let fixture: ComponentFixture<LuxeryCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxeryCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxeryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
