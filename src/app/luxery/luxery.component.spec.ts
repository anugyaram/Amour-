import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeryComponent } from './luxery.component';

describe('LuxeryComponent', () => {
  let component: LuxeryComponent;
  let fixture: ComponentFixture<LuxeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
