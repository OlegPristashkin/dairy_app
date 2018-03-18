/**
 * Created by 10 on 16.03.2018.
 */
import { Comment } from './comment';

const downloadedComments: string = localStorage.getItem('comments');


const downloadedCommentsArr: Array<Comment> = JSON.parse(downloadedComments);

let downloadedCommentsArr2: Array<Comment> = [];

console.log( downloadedComments);

if (typeof downloadedCommentsArr === 'object' && downloadedComments !== null) {
    downloadedCommentsArr2 = downloadedCommentsArr;
} else {
    downloadedCommentsArr2 = [
        {color: 'rgb(71, 86, 140)', text: 'May indulgence difficulty ham can put especially. Bringing remember for .'},
        {color: 'rgb(255, 138, 0)', text: 'May indulgence difficulty ham can put especially. Bringing rememberofmy front.'}
    ];
}

console.log(downloadedCommentsArr2);

export let COMMENTS: Comment[] = downloadedCommentsArr2;
