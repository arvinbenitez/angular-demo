import { Component, OnInit, Input } from '@angular/core';
import { ColumnDefinition, GridData, Row } from '../contracts/grid-data';

@Component({
  selector: 'div.grid-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

@Input()
private data: GridData;

  constructor() { }

  ngOnInit() {
  }

}
