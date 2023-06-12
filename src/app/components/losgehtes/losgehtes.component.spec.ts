import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosgehtesComponent } from './losgehtes.component';

describe('LosgehtesComponent', () => {
  let component: LosgehtesComponent;
  let fixture: ComponentFixture<LosgehtesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosgehtesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LosgehtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
