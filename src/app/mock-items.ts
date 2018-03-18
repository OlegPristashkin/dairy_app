/**
 * Created by 10 on 16.03.2018.
 */
import { Item } from './item';

const downloadedItems: string = localStorage.getItem('items');
const downloadedItemsArr: Array<Item> = JSON.parse(downloadedItems);

let downloadedItemsArr2: Array<Item>;

if (typeof downloadedItemsArr === 'object'  && downloadedItems !== null) {
        downloadedItemsArr2 = downloadedItemsArr;
} else {
    downloadedItemsArr2 = [
        {count: 2, name: 'first itam with custom name'},
        {count: 130, name: 'Second item is active'}
    ];
}


export let ITEMS: Item[] = downloadedItemsArr2;
