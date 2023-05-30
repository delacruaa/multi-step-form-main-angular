import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StepsComponent } from './components/steps/steps.component';
import { YourInfoComponent } from './components/your-info/your-info.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { SummaryComponent } from './components/summary/summary.component';
@NgModule({
  declarations: [AppComponent, StepsComponent, YourInfoComponent, SelectPlanComponent, AddOnsComponent, SummaryComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
