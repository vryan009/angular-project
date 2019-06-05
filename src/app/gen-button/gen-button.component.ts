import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gen-button',
  templateUrl: './gen-button.component.html',
  styleUrls: ['./gen-button.component.css']
})
export class GenButtonComponent implements OnInit {

  @Input() buttonDisplayName : String;

  @Input() isButtonDisabled: boolean;

  submit: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log("Submitted?: " + this.submit);
  }


  onSubmit(){
    this.submit = true;
    console.log("Submitted!: " + this.submit);
  }

}
