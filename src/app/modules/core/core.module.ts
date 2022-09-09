import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent, NavComponent } from './components';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, NavComponent],
    imports: [BrowserModule, CommonModule],
    exports: [HeaderComponent, FooterComponent, NavComponent],
})
export class CoreModule {}
