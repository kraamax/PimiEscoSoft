import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureDetailsListComponent } from './facture-details-list.component';

describe('FactureDetailsListComponent', () => {
  let component: FactureDetailsListComponent;
  let fixture: ComponentFixture<FactureDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
