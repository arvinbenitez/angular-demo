import { browser } from 'protractor';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { ColumnDefinition, GridData, Row } from '../contracts/grid-data';
import { Subject } from 'rxjs';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'div.grid-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input()
  private data: GridData;

  private visibleData: Row[];
  private topRow: number;
  private maxRows = 18;

  private fakeHeight: number;
  private totalRows: number;

  private scrollSubject = new Subject<number>();

  constructor(private cd: ChangeDetectorRef) {
    this.topRow = 0;
  }

  ngOnInit() {
    this.setupVisibleData();
    this.totalRows = this.data.rows.length;
    this.fakeHeight = this.totalRows * 30; //assume 30px height of the cell
    this.scrollSubject
      .debounceTime(15)
      .distinctUntilChanged()
      .subscribe((result: number) => {
        this.calculateVisible(result);
      });

  }

  private onscroll($event: any): void {
    $event.stopPropagation();
    const top = $event.srcElement.scrollTop;
    this.scrollSubject.next(top);
  }

  private calculateVisible(top: number): void {
    const calculatedTopRow = Math.floor(top / this.fakeHeight * this.totalRows);
    if (this.hitBottom(top)) {
      this.topRow = this.totalRows - (this.maxRows / 2); // calculate the visible rows
    } else {
      this.topRow = calculatedTopRow;
    }
    this.setupVisibleData();
    this.cd.detectChanges();
  }

  private hitBottom(top: number): Boolean {
    //threshold in pixels 500 maybe?
    return (this.fakeHeight - top <= 500);
  }

  private setupVisibleData() {
    this.visibleData = [];
    for (let i = this.topRow; i <= this.topRow + this.maxRows; i++) {
      if (this.data.rows[i]) {
        this.visibleData.push(this.data.rows[i]);
      }
    }
  }

}
