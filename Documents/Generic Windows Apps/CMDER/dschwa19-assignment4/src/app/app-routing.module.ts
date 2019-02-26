import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: '**',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
