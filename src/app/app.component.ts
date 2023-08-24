import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // [x: string]: any;
  title = 'AngularFormTableExample';

  submittedData: {
    firstName: string;
    lastName: string;
   // dropDownValues: any[];
    selected: any[];
    editorContent: string;
  }[] = [];
  constructor() {}
  onFormSubmitted(data: {
    firstName: string;
    lastName: string;
   // dropDownValues: any[];
    selected: any[];
    editorContent: string;
    //htmlContent: string;
  }) {
    this.submittedData.push(data);
    console.log('Received Data:', data.selected);
  }
}
