import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsubmitComponent } from './ticketsubmit.component';

describe('TicketsubmitComponent', () => {
  let component: TicketsubmitComponent;
  let fixture: ComponentFixture<TicketsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
