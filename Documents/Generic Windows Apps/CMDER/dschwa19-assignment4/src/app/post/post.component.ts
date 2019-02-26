import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../Models/post.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  post: Post = new Post;
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.service.getPostById(id);
  }

}
