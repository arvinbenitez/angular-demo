import { Component, OnInit } from '@angular/core';
import { Box } from './components/contracts';
import { NameService } from './components/services';

@Component({
  selector: 'acb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Change Detection Demo';

  box: Box;

  constructor(private nameService: NameService) { }

  public ngOnInit() {
    this.box = this.createBox(5, 2);
  }

  private changeName(event: any): void {
    this.box.name = this.nameService.generateName();
  }

  private createBox(level: number, children: number): Box {
    const box: Box = {
      id: Math.floor(Math.random() * 100000).toString(),
      name: this.nameService.generateName(),
      children: []
    };
    let childBox: Box;
    for (let i = 0; i < children; i++) {
      if (level > 1) {
        childBox = this.createBox(level - 1, children);
        box.children.push(childBox);
      }
    }
    return box;
  }

}
