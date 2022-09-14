import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentregistration1nComponent } from './studentregistration1n.component';

describe('Studentregistration1nComponent', () => {
  let component: Studentregistration1nComponent;
  let fixture: ComponentFixture<Studentregistration1nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studentregistration1nComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentregistration1nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
