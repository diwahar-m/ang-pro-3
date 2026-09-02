import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string; text: string}) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    };
    this.tickets.push(newTicket);
  }

   onCloseTicket(id: string){ 
      this.tickets = this.tickets.map((ticket) => {
        if(ticket.id === id){
          return {...ticket, status: 'closed'};
        }
        return ticket;
      })
   }
}
