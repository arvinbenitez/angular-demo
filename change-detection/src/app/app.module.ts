import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoxComponent, LegendComponent, SettingComponent } from './components';

import { NameService, SettingService } from './components/services';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    LegendComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NameService, SettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
