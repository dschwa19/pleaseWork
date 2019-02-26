import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post.models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // tslint:disable-next-line:semicolon
  posts: Post[] = []
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts();
    this.service.getPostUpdateListener()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

}
