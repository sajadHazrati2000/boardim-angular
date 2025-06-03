import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  template: `
    <header class="bg-blue-500 text-white p-4 flex justify-between">
      <h1 class="text-xl">Boardim</h1>
      <button
        class="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
        (click)="toggle.emit()"
      >
        Toggle Tab
      </button>
    </header>
  `,
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
}
