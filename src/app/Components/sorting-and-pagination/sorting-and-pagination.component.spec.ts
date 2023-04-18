import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingAndPaginationComponent } from './sorting-and-pagination.component';

describe('SortingAndPaginationComponent', () => {
  let component: SortingAndPaginationComponent;
  let fixture: ComponentFixture<SortingAndPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingAndPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingAndPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
