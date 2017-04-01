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

  // Setting to control the flashing
  public flashTime = 200;

  // Flag whether to use onPush Component
  public onPush = true;

  public eventSettings: any[] = [];
  constructor() {
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

}
