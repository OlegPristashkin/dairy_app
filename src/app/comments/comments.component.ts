import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { COMMENTS } from '../mock-comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

comments;

constructor() {
  this.comments = COMMENTS;
  let self = this;
  document.onkeyup = function(e) {
    if ( e.ctrlKey && e.which === 13 ) {
      const item_elem = document.getElementById('add-new-com') as HTMLInputElement;
      const item_name: string = item_elem.value;
      if ( item_name !== '') {
        self.updateComments(item_name);
        localStorage.setItem('comments', JSON.stringify(COMMENTS));
        // ITEMS.push({count: 2, name: document.querySelector('.item-name').value});
      }
    }
  };
}

updateComments(item_name: string): void {
  COMMENTS.push({color: '   ', text: item_name});
  localStorage.setItem('comments', JSON.stringify(COMMENTS));
}
  ngOnInit() {
  }

}
