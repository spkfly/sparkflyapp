import { Injectable } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  constructor(private calendar: Calendar) { 
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

}