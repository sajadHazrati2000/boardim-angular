import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layout/header.component';
import {FirstTabComponent} from "./first-tab.component";
import {SecondTabComponent} from "./second-tab.component";



@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FirstTabComponent, SecondTabComponent],
  template: `
    <app-header (toggle)="showSecondTab = !showSecondTab" />
    <div class="flex h-[calc(100vh-64px)] overflow-hidden">
      <div
        class="h-full"
        [style.width.%]="showSecondTab ? leftWidth : 100"
      >
        <app-first-tab></app-first-tab>
      </div>

      <div
        *ngIf="showSecondTab"
        class="w-2 bg-gray-300 cursor-col-resize"
        (mousedown)="startResizing($event)"
      ></div>

      <div
        *ngIf="showSecondTab"
        class="h-full"
        [style.width.%]="100 - leftWidth"
      >
        <app-second-tab></app-second-tab>
      </div>
    </div>
  `,
})
export class TabsComponent {
  showSecondTab = true;
  leftWidth = 50;
  resizing = false;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.resizing || !this.showSecondTab) return;
    const totalWidth = window.innerWidth;
    const newLeftWidth = (event.clientX / totalWidth) * 100;
    if (newLeftWidth > 10 && newLeftWidth < 90) {
      this.leftWidth = newLeftWidth;
    }
  }

  @HostListener('window:mouseup')
  stopResizing() {
    this.resizing = false;
  }

  startResizing(event: MouseEvent) {
    event.preventDefault();
    this.resizing = true;
  }
}
