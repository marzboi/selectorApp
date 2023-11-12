import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountriesRoutingModule } from './countries-routing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [CommonModule, CountriesRoutingModule, ReactiveFormsModule],
  exports: [],
})
export class CountriesModule {}
