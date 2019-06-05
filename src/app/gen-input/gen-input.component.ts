import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gen-input',
  templateUrl: './gen-input.component.html',
  styleUrls: ['./gen-input.component.css']
})
export class GenInputComponent implements OnInit {

  // @Input() inputDisplayName: String;
  @Input() inputType: String;
  @Input() inputValue: String;

  constructor() { }

  ngOnInit() {
  }

}
