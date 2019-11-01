import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketareaComponent } from './ticketarea.component';

describe('TicketareaComponent', () => {
  let component: TicketareaComponent;
  let fixture: ComponentFixture<TicketareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
