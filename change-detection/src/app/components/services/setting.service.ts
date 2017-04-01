import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {
  public static readonly onChangesColor = 'red';
  public static readonly onInitColor = 'orange';
  public static readonly doCheckColor = 'yellow';
  public static readonly afterContentInitColor = 'green';
  public static readonly afterContentCheckedColor = 'blue';
  public static readonly afterViewInitColor = 'indigo';
  public static readonly afterViewCheckedColor = 'violet';

  public enableOnChanges = false;
  public enableOnInit = false;
  public enableDoCheck = false;
  public enableAfterContentInit = false;
  public enabletAfterContentChecked = false;
  public enableAfterViewInit = false;
  public enableAfterViewChecked = false;

  public eventSettings: any[] = [];
  constructor() {
    this.eventSettings.push({ name: 'ngOnChanges', color: SettingService.onChangesColor });
    this.eventSettings.push({ name: 'ngOnInit', color: SettingService.onInitColor });
    this.eventSettings.push({ name: 'ngDoCheck', color: SettingService.doCheckColor });
    this.eventSettings.push({ name: 'ngAfterContentInit', color: SettingService.afterContentInitColor });
    this.eventSettings.push({ name: 'ngAfterContentChecked', color: SettingService.afterContentCheckedColor });
    this.eventSettings.push({ name: 'ngAfterViewInit', color: SettingService.afterViewInitColor });
    this.eventSettings.push({ name: 'ngAfterViewChecked', color: SettingService.afterViewCheckedColor });
  }
}
