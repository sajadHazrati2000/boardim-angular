import { Component } from '@angular/core';

@Component({
  selector: 'app-second-tab',
  standalone: true,
  template: `
    <div class="w-full h-full bg-white">
      <iframe
        class="w-full h-full border-0"
        src="https://ismc.ir/"
      ></iframe>
    </div>
  `
})
export class SecondTabComponent {}
