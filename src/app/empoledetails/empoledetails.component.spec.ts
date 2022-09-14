import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoledetailsComponent } from './empoledetails.component';

describe('EmpoledetailsComponent', () => {
  let component: EmpoledetailsComponent;
  let fixture: ComponentFixture<EmpoledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoledetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpoledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
