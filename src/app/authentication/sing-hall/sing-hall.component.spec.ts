import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingHallComponent } from './sing-hall.component';

describe('SingHallComponent', () => {
  let component: SingHallComponent;
  let fixture: ComponentFixture<SingHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingHallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
