import { Component, OnInit, Input } from '@angular/core';
import { ColumnDefinition } from '../contracts/grid-data';

@Component({
  selector: 'div.grid-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  private columns: ColumnDefinition[];

  constructor() { }

  ngOnInit() {
  }

}
