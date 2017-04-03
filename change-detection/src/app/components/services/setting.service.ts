import { Injectable } from '@angular/core';
import { Box } from '../contracts';
import { NameService } from './name.service';

@Injectable()
export class SettingService {
  public static readonly onChangesColor = 'red';
  public static readonly onInitColor = 'orange';
  public static readonly doCheckColor = 'yellow';
  public static readonly afterContentInitColor = 'green';
  public static readonly afterContentCheckedColor = 'blue';
  public static readonly afterViewInitColor = 'indigo';
  public static readonly afterViewCheckedColor = 'violet';

  public box: Box;

  // Setting to control the flashing
  public flashTime = 200;

  // Flag whether to use onPush Component
  public onPush = true;
  public randomizeOnPush = false; // set this to true if the change detection needs to be random 

  // The number of levels for the tree
  public treeDepth = 5;

  // The default number of children
  public numberOfChildren = 2;

  public eventSettings: any[] = [];
  constructor(private nameService: NameService) {
    this.eventSettings.push({ name: 'ngOnChanges', color: SettingService.onChangesColor, enabled: true });
    this.eventSettings.push({ name: 'ngOnInit', color: SettingService.onInitColor, enabled: true });
    this.eventSettings.push({ name: 'ngDoCheck', color: SettingService.doCheckColor, enabled: true });
    this.eventSettings.push({ name: 'ngAfterContentInit', color: SettingService.afterContentInitColor, enabled: true });
    this.eventSettings.push({ name: 'ngAfterContentChecked', color: SettingService.afterContentCheckedColor, enabled: true });
    this.eventSettings.push({ name: 'ngAfterViewInit', color: SettingService.afterViewInitColor, enabled: true });
    this.eventSettings.push({ name: 'ngAfterViewChecked', color: SettingService.afterViewCheckedColor, enabled: true });
  }

  public isEnabled(color: string): boolean {
    const event = this.eventSettings.filter((x) => x.color === color);
    return event && event[0] ? event[0].enabled : false;
  }

  public generateBox(): void {
    this.box = this.createBox(this.treeDepth, this.numberOfChildren);
    console.log(this.box);
  }

  private createBox(level: number, children: number): Box {
    const push = this.randomizeOnPush ? Math.floor(Math.random() * 2) === 0 : this.onPush;
    const box: Box = {
      id: Math.floor(Math.random() * 100000).toString(),
      isPush: push,
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
