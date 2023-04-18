import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSerialNoComponent } from './add-serial-no.component';

describe('AddSerialNoComponent', () => {
  let component: AddSerialNoComponent;
  let fixture: ComponentFixture<AddSerialNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSerialNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSerialNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
