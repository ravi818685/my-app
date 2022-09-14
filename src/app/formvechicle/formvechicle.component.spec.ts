import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvechicleComponent } from './formvechicle.component';

describe('FormvechicleComponent', () => {
  let component: FormvechicleComponent;
  let fixture: ComponentFixture<FormvechicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvechicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormvechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
