import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';
import { GridData, ColumnDefinition, Row } from '../contracts/grid-data';

@Component({
  selector: 'div.grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private data: GridData;

  constructor(private gridService: GridService) {
    this.data = this.gridService.gridData(10, 20000);
  }

  ngOnInit() {
    console.log(this.data);
  }

}
