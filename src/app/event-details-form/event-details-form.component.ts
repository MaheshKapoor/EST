import { Component, OnInit } from '@angular/core';
import {EventDetails} from  '../event-details';
import test from '../../assets/data/test.json';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-event-details-form',
  templateUrl: './event-details-form.component.html',
  styleUrls: ['./event-details-form.component.css']
})
export class EventDetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public data= test;
  public filterText;
  public filterDist;
  public filterDate;
  public dateFormatter = new DatePipe('en-US');

  filteredData = [];

   submitted = false;

  onSubmit() {

    this.submitted = true;
    console.log(this.filteredData);

    if (this.filterText && this.filterDist && this.filterDate) {
      //Case1: text, dist and date filters
      this.filteredData = this.data.filter(
        datum =>  ((datum.organisation.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.type.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
                    datum.event.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
                    (datum.district.indexOf(this.filterDist) > -1 ) &&
                    (datum.date.indexOf(this.dateFormatter.transform(this.filterDate, 'EEEE, d MMMM y')) > -1 )) );
      console.log("filter text & dist & date" + this.filteredData);
    } else if (this.filterText && this.filterDist) {
      //Case2: text and dist filters
      this.filteredData = this.data.filter(
        datum =>  ((datum.organisation.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.type.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
                    datum.event.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
                    (datum.district.indexOf(this.filterDist) > -1 )));
      console.log("filter text & dist " + this.filteredData);
    } else if (this.filterText && this.filterDate) {
      //Case3: text & date filters
      this.filteredData = this.data.filter(
        datum =>  ((datum.organisation.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.type.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
                    datum.event.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
                    (datum.date.indexOf(this.dateFormatter.transform(this.filterDate, 'EEEE, d MMMM y')) > -1 )) );
      console.log("filter text & date" + this.filteredData);
    } else if (this.filterText && this.filterDist && this.filterDate) {
      //Case4: dist and date filters
      this.filteredData = this.data.filter(
        datum => ((datum.district.indexOf(this.filterDist) > -1 ) &&
                  (datum.date.indexOf(this.dateFormatter.transform(this.filterDate, 'EEEE, d MMMM y')) > -1 )));
      console.log("filter dist & date" + this.filteredData);
    } else if (this.filterText) {
        //Case5: only text filter
        this.filteredData = this.data.filter(
          datum => (datum.organisation.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.type.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) ||
                    datum.event.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
        console.log("filter text" + this.filteredData);
    } else if (this.filterDist) {
        //Case6: only Dist filter
        this.filteredData = this.data.filter(
          datum => (datum.district.indexOf((this.filterDist)) > -1));
        console.log("filter dist" +this.filteredData);
    } else if(this.filterDate){
        //Case7: only date filter
        this.filteredData = this.data.filter(
          datum => (datum.date.indexOf(this.dateFormatter.transform(this.filterDate, 'EEEE, d MMMM y')) > -1 ));
        console.log("filter date data" + this.dateFormatter.transform(this.filterDate, 'EEEE, d MMMM y') + ":::" + this.filteredData);
    }
  }
}
