import { Injectable } from '@angular/core';
import { GridData, ColumnDefinition, Row } from './contracts/grid-data';

@Injectable()
export class GridService {

  constructor() { }

  public gridData(columns: number, rows: number): GridData {
    const data: GridData = {
      columns: [],
      rows: []
    };
    for (let i = 1; i <= columns; i++) {
      const column: ColumnDefinition = {
        columnHeader: `Header${i}`,
        columnName: `Col${i}`
      };
      data.columns.push(column);
    }
    for (let i = 1; i <= rows; i++) {
      const row: Row = {};
      data.columns.forEach((c: ColumnDefinition) => {
        row[c.columnName] = `Row${i}-${c.columnName}`;
      });
      data.rows.push(row);
    }
    return data;
  }
}
