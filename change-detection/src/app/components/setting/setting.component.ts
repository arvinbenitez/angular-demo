import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services';

@Component({
  selector: 'acb-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private settingService: SettingService) { }

  ngOnInit() {
  }

}
