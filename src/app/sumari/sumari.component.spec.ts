import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumariComponent } from './sumari.component';

describe('SumariComponent', () => {
  let component: SumariComponent;
  let fixture: ComponentFixture<SumariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
