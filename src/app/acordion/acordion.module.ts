import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordionComponent } from './acordion.component';
import { AcordionItemComponent } from './acordion-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AcordionComponent, AcordionItemComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [AcordionComponent, AcordionItemComponent],
})
export class AcordionModule {
  
}
