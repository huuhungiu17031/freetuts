import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from '../pipes/shortcut.pipe';
import { SummaryPipe } from '../pipes/summary.pipe';



@NgModule({
  declarations: [
    ShortcutPipe,
    SummaryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortcutPipe,
    SummaryPipe
  ]
})
export class ShareModule { }
