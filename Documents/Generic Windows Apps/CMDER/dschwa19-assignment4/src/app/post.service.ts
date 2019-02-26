import { Comment } from './Models/comment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Models/post.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  private comments: Comment[] = [];
  private commentsUpdated = new Subject<Comment[]>();

  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPosts() {
    console.log(this.url);
    this.http.get(this.url + '/posts')
      .subscribe((postData: Post[]) => {
        this.posts = postData;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostById(id) {
    for (let i = 0 ; i < this.posts.length; i++ ) {
      if (this.posts[i].id == id) {
        return this.posts[i];
      }
    }
  }
  getComments(postId) {
    this.http.get(this.url + '/comments?postId=' + postId)
      .subscribe((comments: Comment[]) => {
        console.log(comments);
        this.comments = comments;
        this.commentsUpdated.next([...this.comments]);
      })
  }

  getCommentUpdateListener() {
    return this.commentsUpdated.asObservable();
  }
}
