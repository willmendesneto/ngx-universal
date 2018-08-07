import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingItemDetailContainerComponent } from './listing-item.component';

describe('ListingItemDetailComponent', () => {
  let component: ListingItemDetailContainerComponent;
  let fixture: ComponentFixture<ListingItemDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingItemDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingItemDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
