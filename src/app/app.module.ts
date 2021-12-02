import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { QuantityFormComponent } from './quantity-form/quantity-form.component';

@NgModule({
  declarations: [AppComponent, CustomCounterComponent, QuantityFormComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
