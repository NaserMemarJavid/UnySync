import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudienverlaufsplanComponent } from './studienverlaufsplan.component';

describe('StudienverlaufsplanComponent', () => {
  let component: StudienverlaufsplanComponent;
  let fixture: ComponentFixture<StudienverlaufsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudienverlaufsplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudienverlaufsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
