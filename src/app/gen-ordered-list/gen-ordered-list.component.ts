import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gen-ordered-list',
  templateUrl: './gen-ordered-list.component.html',
  styleUrls: ['./gen-ordered-list.component.css']
})
export class GenOrderedListComponent implements OnInit {

  @Input() itemList: String[];

  @Input() itemListType: String;

  constructor() { }

  ngOnInit() {
  }

}
