import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  OnChanges,
  Input
} from '@angular/core';
import { Box, Flash } from '../contracts';
import { NameService, SettingService } from '../services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'acb-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnInit, OnChanges {

  @Input() data: Box;
  private flashInProgress: boolean = false;
  private flashQueue: Flash[] = [];

  constructor(private element: ElementRef,
    private nameService: NameService,
    private settingService: SettingService) { }

  ngOnChanges() {
    if (this.settingService.isEnabled(SettingService.onChangesColor)) {
      this.flash(SettingService.onChangesColor, SettingService.flashTime);
    }
  }

  ngOnInit() {
    if (this.settingService.isEnabled(SettingService.onInitColor)) {
      this.flash(SettingService.onInitColor, SettingService.flashTime);
    }
  }
  ngDoCheck() {
    if (this.settingService.isEnabled(SettingService.doCheckColor)) {
      this.flash(SettingService.doCheckColor, SettingService.flashTime);
    }
  }
  ngAfterContentInit() {
    if (this.settingService.isEnabled(SettingService.afterContentInitColor)) {
      this.flash(SettingService.afterContentInitColor, SettingService.flashTime);
    }
  }

  ngAfterContentChecked() {
    if (this.settingService.isEnabled(SettingService.afterContentCheckedColor)) {
      this.flash(SettingService.afterContentCheckedColor, SettingService.flashTime);
    }
  }

  ngAfterViewInit() {
    if (this.settingService.isEnabled(SettingService.afterViewInitColor)) {
      this.flash(SettingService.afterViewInitColor, SettingService.flashTime);
    }
  }

  ngAfterViewChecked() {
    if (this.settingService.isEnabled(SettingService.afterViewCheckedColor)) {
      this.flash(SettingService.afterViewCheckedColor, SettingService.flashTime);
    }
  }

  private changeName($event): void {
    $event.stopPropagation();
    this.data.name = this.nameService.generateName();
  }

  private flash(color: string, flashTimeInMs = 1000) {
    const flashMessage: Flash = { color: color, timeInMilliseconds: flashTimeInMs };
    if (this.flashInProgress) {
      // let's not push message if the same color already exists
      if (this.getMessageCount(flashMessage.color) <= 0) {
        this.flashQueue.push(flashMessage);
      }
    } else {
      this.applyFlash(flashMessage);
    }
  }

  private getMessageCount(color: string): number {
    const messages = this.flashQueue.filter(x => x.color === color);
    return messages ? messages.length : 0;
  }

  private applyFlash(flashMessage: Flash): void {
    this.element.nativeElement.getElementsByClassName('box')[0].style.background = flashMessage.color;
    this.flashInProgress = true;
    setTimeout(() => {
      if (this.flashQueue && this.flashQueue.length > 0) {
        const poppedMessage = this.flashQueue.shift();
        this.applyFlash(poppedMessage);
      } else {
        this.element.nativeElement.getElementsByClassName('box')[0].style.background = 'lightgray';
        this.flashInProgress = false;
      }
    }, flashMessage.timeInMilliseconds);
  }
}
