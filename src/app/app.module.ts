import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VenicleModule } from 'src/venicle/venicle.module';
import { VENICLE_TOKEN } from 'src/venicle/tokens/venicle-color.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VenicleModule
  ],
  providers: [
    { provide: VENICLE_TOKEN, useValue: { hasShadow: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
