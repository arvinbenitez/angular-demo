import { Component, OnInit, Input } from '@angular/core';
import { ColumnDefinition } from '../contracts/grid-data';

@Component({
  selector: 'div.grid-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Input()
  private columns: ColumnDefinition[];
  constructor() { }

  ngOnInit() {
  }

}
