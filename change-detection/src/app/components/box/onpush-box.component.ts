import {
  ChangeDetectionStrategy,
  Component,
  ElementRef
} from '@angular/core';
import { NameService, SettingService } from '../services';
import { BoxComponentBase } from './box-base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'acb-onpush-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class OnPushBoxComponent extends BoxComponentBase {
  constructor(element: ElementRef,
    nameService: NameService,
    settingService: SettingService) {
    super(element, nameService, settingService);
  }
}
