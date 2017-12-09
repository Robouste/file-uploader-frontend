import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const MODULES = [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	CommonModule,
	RouterModule,
	MaterialModule,
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: [],
	providers: [],
})
export class SharedModule { }
