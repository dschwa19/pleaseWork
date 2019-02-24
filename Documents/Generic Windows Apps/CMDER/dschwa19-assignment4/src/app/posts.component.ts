import { Component } from '@angular/core';
import { PostsService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class PostsComponent {
  titler = 'wojfklasdf';
  todo;


  constructor(private postsService: PostsService) {
    postsService.getTodo()
      .toPromise()
      .then((response) => {
        console.log(response);
        this.todo = response;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
