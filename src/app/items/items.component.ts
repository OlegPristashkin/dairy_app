import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ITEMS} from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items;

  constructor() {
    this.items = ITEMS;
  }

  deleteItem(item: Item): void {
      for (const i in ITEMS) {
        if (ITEMS[i].name === item.name) {
          if (ITEMS[i].count > 1) {
            ITEMS[i].count -= 1;
          } else {
            ITEMS.splice(i, 1);
          }
        }
      }
    localStorage.setItem('items', JSON.stringify(ITEMS));
  }

  ngOnInit() {
  }

}
