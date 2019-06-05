import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gen-search-button',
  templateUrl: './gen-search-button.component.html',
  styleUrls: ['./gen-search-button.component.css']
})
export class GenSearchButtonComponent implements OnInit {

  /* Type of input field  */
  @Input() inputType: String;

  @Input() inputTextSearch : String;

  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log("Searching " + this.inputTextSearch + "...");
  }

}