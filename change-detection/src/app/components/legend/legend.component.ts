import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services';

@Component({
  selector: 'acb-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {

  constructor(private settingService: SettingService) { }

  ngOnInit() {
  }

}
