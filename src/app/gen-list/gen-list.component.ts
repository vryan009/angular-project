import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gen-list',
  templateUrl: './gen-list.component.html',
  styleUrls: ['./gen-list.component.css']
})
export class GenListComponent implements OnInit {

  @Input() itemList: String[];

  constructor() { }

  ngOnInit() {
  }

}
