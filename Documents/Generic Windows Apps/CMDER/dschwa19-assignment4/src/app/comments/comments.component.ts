import { PostService } from './../post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../Models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {

  @Input() postId;
  comments: Comment[] = [];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getComments(this.postId);
    this.service.getCommentUpdateListener()
      .subscribe(comments => {
        this.comments = comments;
      });
  }

}
