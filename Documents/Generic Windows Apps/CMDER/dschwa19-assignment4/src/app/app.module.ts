import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [
    PostsComponent
  ]
})
export class AppModule { }
