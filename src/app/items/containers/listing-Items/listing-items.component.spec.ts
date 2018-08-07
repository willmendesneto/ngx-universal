import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingItemsContainerComponent } from './listing-items.component';

describe('ListingItemsComponent', () => {
  let component: ListingItemsContainerComponent;
  let fixture: ComponentFixture<ListingItemsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingItemsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
