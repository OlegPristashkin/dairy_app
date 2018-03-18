import { Component } from '@angular/core';
import { ITEMS } from './mock-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  addItem(): void {
    const item_elem = document.getElementById('item-name-id') as HTMLInputElement;
    const item_name: string = item_elem.value;
    if ( item_name !== '') {
      this.updateItems(item_name);
      localStorage.setItem('items', JSON.stringify(ITEMS));
      // ITEMS.push({count: 2, name: document.querySelector('.item-name').value});
    }
  }
  updateItems(item_name: string): void {
    let updated = false;
    for ( const i in ITEMS) {
      if (ITEMS[i].name === item_name) {
          ITEMS[i].count += 1;
          updated = true;
      }
    }
    if (updated === false) {
      ITEMS.push({count: 1, name: item_name});
    }
  }

}
