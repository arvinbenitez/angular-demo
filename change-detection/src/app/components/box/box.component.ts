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
  private flashInProgress: any = undefined;
  private flashQueue: Flash[] = [];

  constructor(private element: ElementRef,
    private nameService: NameService,
    private settingService: SettingService) { }

  ngOnChanges() {
    if (this.settingService.enableOnChanges) {
      this.flash(SettingService.onChangesColor, 500);
    }
  }

  ngOnInit() {
    if (this.settingService.enableOnInit) {
      this.flash(SettingService.onInitColor, 500);
    }
  }
  ngDoCheck() {
    if (this.settingService.enableDoCheck) {
      this.flash(SettingService.doCheckColor, 100);
    }
  }
  ngAfterContentInit() {
    if (this.settingService.enableAfterContentInit) {
      this.flash(SettingService.afterContentInitColor, 500);
    }
  }

  ngAfterContentChecked() {
    if (this.settingService.enabletAfterContentChecked) {
      this.flash(SettingService.afterContentCheckedColor, 100);
    }
  }

  ngAfterViewInit() {
    if (this.settingService.enableAfterViewInit) {
      this.flash(SettingService.afterViewInitColor, 500);
    }
  }

  ngAfterViewChecked() {
    if (this.settingService.enableAfterViewChecked) {
      this.flash('violet', 100);
    }
  }

  private changeName($event): void {
    $event.stopPropagation();
    this.data.name = this.nameService.generateName();
  }

  private flash(color: string, flashTimeInMs = 1000) {
    const flashMessage: Flash = { color: color, timeInMilliseconds: flashTimeInMs };
    if (this.flashInProgress) {
      this.flashQueue.push(flashMessage);
    } else {
      this.applyFlash(flashMessage);
    }
  }

  private applyFlash(flashMessage: Flash): void {
    this.element.nativeElement.getElementsByClassName('box')[0].style.background = flashMessage.color;
    this.flashInProgress = setTimeout(() => {
      if (this.flashQueue && this.flashQueue.length > 0) {
        const poppedMessage = this.flashQueue.shift();
        this.applyFlash(poppedMessage);
      } else {
        this.element.nativeElement.getElementsByClassName('box')[0].style.background = 'lightgrey';
        this.flashInProgress = undefined;
      }
    }, flashMessage.timeInMilliseconds);
  }
}
