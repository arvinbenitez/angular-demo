import { Component, OnInit } from '@angular/core';
import { Box } from './components/contracts';
import { NameService, SettingService } from './components/services';

@Component({
  selector: 'acb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Change Detection Demo';

  constructor(private nameService: NameService, private settingService: SettingService) { }

  public ngOnInit() {
    this.settingService.generateBox();
  }

  private changeName(event: any): void {
    this.settingService.box.name = this.nameService.generateName();
  }


}
