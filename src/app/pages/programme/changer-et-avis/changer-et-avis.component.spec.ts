import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerEtAvisComponent } from './changer-et-avis.component';

describe('ChangerEtAvisComponent', () => {
  let component: ChangerEtAvisComponent;
  let fixture: ComponentFixture<ChangerEtAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerEtAvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerEtAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
