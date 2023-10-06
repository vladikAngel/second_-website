import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehriderComponent } from './tehrider.component';

describe('TehriderComponent', () => {
  let component: TehriderComponent;
  let fixture: ComponentFixture<TehriderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TehriderComponent]
    });
    fixture = TestBed.createComponent(TehriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
