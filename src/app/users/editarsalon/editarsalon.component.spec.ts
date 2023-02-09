import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarsalonComponent } from './editarsalon.component';

describe('EditarsalonComponent', () => {
  let component: EditarsalonComponent;
  let fixture: ComponentFixture<EditarsalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarsalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarsalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
