import {
  Component,
  ElementRef
} from '@angular/core';
import { NameService, SettingService } from '../services';
import { BoxComponentBase } from './box-base.component';

@Component({
  selector: 'acb-default-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class DefaultBoxComponent extends BoxComponentBase {
  constructor(element: ElementRef,
    nameService: NameService,
    settingService: SettingService) {
    super(element, nameService, settingService);
    this.isPush = false;
  }
}
