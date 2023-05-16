import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassvergessenComponent } from './passvergessen.component';

describe('PassvergessenComponent', () => {
  let component: PassvergessenComponent;
  let fixture: ComponentFixture<PassvergessenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassvergessenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassvergessenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
