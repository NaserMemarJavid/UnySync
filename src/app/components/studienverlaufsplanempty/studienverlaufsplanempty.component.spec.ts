import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudienverlaufsplanemptyComponent } from './studienverlaufsplanempty.component';

describe('StudienverlaufsplanemptyComponent', () => {
  let component: StudienverlaufsplanemptyComponent;
  let fixture: ComponentFixture<StudienverlaufsplanemptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudienverlaufsplanemptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudienverlaufsplanemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
