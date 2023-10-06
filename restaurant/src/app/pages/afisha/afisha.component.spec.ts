import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfishaComponent } from './afisha.component';

describe('AfishaComponent', () => {
  let component: AfishaComponent;
  let fixture: ComponentFixture<AfishaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfishaComponent]
    });
    fixture = TestBed.createComponent(AfishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
