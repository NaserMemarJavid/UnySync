import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintoolsComponent } from './maintools.component';

describe('MaintoolsComponent', () => {
  let component: MaintoolsComponent;
  let fixture: ComponentFixture<MaintoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
