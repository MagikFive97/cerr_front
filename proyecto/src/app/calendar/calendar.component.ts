import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Crear Puerta Garaje', date: '2022-06-01' },
      { title: 'Puerta Cochera Particular', date: '2022-06-07' },
      { title: 'Ventana', date: '2022-06-07' },
      
    ]
  };

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr);
  }
  
  
}
