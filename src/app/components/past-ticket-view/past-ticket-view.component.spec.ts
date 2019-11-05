import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTicketViewComponent } from './past-ticket-view.component';

describe('PastTicketViewComponent', () => {
  let component: PastTicketViewComponent;
  let fixture: ComponentFixture<PastTicketViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTicketViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
