import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //------DropDown-------
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  //------Variables for form submit-------
  firstName: string = '';
  lastName: string = '';
  selectedOptions: any[] = [];

  //------------muliselect dropdown array saves values-------------
  dropDownValues: any = [];
  //----------------------------
  editorContent: any; //html content
  //---------------------------
  @Output() formSubmitted = new EventEmitter<{
    firstName: string;
    lastName: string;
    //dropDownValues: any[];
    selected: any[];
    editorContent: any;

    //htmlContent: string;
  }>();
  //----------------------------------
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: '200%',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  //-----------------------------------
  constructor() {}
  //-----------------------------------
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  //-----------------------------------
  selected: any[] = [];
  onItemSelect(Options: {}) {
    console.log(Options, 'on select called');
    this.selected.push(Options);
  }

  onSelectAll(OptionsPlus: any) {
    console.log(OptionsPlus, 'ALL');
    //this.dropDownValues = OptionsPlus;
  }

  submitForm() {
    //console.log('Lo phro...!', this.editorContent);
    if (
      this.firstName &&
      this.lastName &&
      //this.dropDownValues &&
      this.selected &&
      this.editorContent
    ) {
      this.formSubmitted.emit({
        firstName: this.firstName,
        lastName: this.lastName,
        //dropDownValues: this.dropDownValues,
        selected: this.selected,
        editorContent: this.editorContent,
      });
      this.firstName = '';
      this.lastName = '';
      //this.dropDownValues = '';
      this.editorContent = '';
      //console.log(this.editorContent, 'ok');
    }
  }
}
