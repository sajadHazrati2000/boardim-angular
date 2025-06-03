import { Component } from '@angular/core';

@Component({
  selector: 'app-first-tab',
  standalone: true,
  template: `
      <div class="w-full h-full bg-white p-2">
      <textarea
        class="w-full h-full resize-none border rounded p-4 text-base"
        placeholder="test"
      ></textarea>
      </div>
  `
})
export class FirstTabComponent {}
