import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gen-button',
  templateUrl: './gen-button.component.html',
  styleUrls: ['./gen-button.component.css']
})
export class GenButtonComponent implements OnInit {

  @Input() buttonDisplayName : String;
  @Input() buttonClass: String;
  @Input() isButtonDisabled: boolean;
  @Output() emitSubmit = new EventEmitter<boolean>();

  submit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submit = true;
    // console.log("Submitted!: " + this.submit);
    this.emitSubmit.emit(this.submit);
  }

}
