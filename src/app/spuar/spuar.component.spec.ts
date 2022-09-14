import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpuarComponent } from './spuar.component';

describe('SpuarComponent', () => {
  let component: SpuarComponent;
  let fixture: ComponentFixture<SpuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpuarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
