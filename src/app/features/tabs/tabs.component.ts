import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../../layout/header.component';
import {FirstTabComponent} from "./first-tab.component";
import {SecondTabComponent} from "./second-tab.component";

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {setLeftWidth, toggleSecondTab} from '../../store/layout/layout.actions';
import {selectLeftWidth, selectShowSecondTab} from '../../store/layout/layout.selectors';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FirstTabComponent, SecondTabComponent],
  template: `
    <app-header (toggle)="onToggleTab()"/>
    <div class="flex h-[calc(100vh-64px)] overflow-hidden">
      <div
        class="h-full"
        [style.width.%]="((showSecondTab$ | async )? (leftWidth$ | async ): 100)"
      >
        <app-first-tab></app-first-tab>
      </div>

      <div
        *ngIf="showSecondTab$ | async"
        class="w-2 bg-gray-300 cursor-col-resize"
        (mousedown)="startResizing($event)"
      ></div>

      <div
        *ngIf="showSecondTab$ | async"
        class="h-full"
        [style.width.%]="100 - ((leftWidth$ | async )|| 0)"
      >
        <app-second-tab></app-second-tab>
      </div>
    </div>
  `,
})
export class TabsComponent {
  showSecondTab$: Observable<boolean>;
  leftWidth$: Observable<number>;

  resizing = false;

  constructor(private store: Store) {
    this.showSecondTab$ = this.store.select(selectShowSecondTab);
    this.leftWidth$ = this.store.select(selectLeftWidth);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.resizing) return;

    const totalWidth = window.innerWidth;
    const newLeftWidth = (event.clientX / totalWidth) * 100;

    if (newLeftWidth > 10 && newLeftWidth < 90) {
      this.store.dispatch(setLeftWidth({width: newLeftWidth}));
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

  onToggleTab() {
    this.store.dispatch(toggleSecondTab());
  }
}
