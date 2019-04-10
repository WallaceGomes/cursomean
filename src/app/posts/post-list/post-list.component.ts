import { Component, OnInit, OnDestroy } from '@angular/core';

import { Post } from './../post.model';
import { PostService } from './../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts =[ o post seria assim
  //   { title: 'Primeiro Post', content: 'Conteúdo do primeiro post' },
  //   { title: 'Segundo Post', content: 'Conteúdo do segundo post' },
  //   { title: 'Terceiro Post', content: 'Conteúdo do terceiro post' }
  // ];
 posts: Post[] = [];

 private postsSub: Subscription;

    constructor(public postsService: PostService) {}

    ngOnInit() {
      this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdatedListener()
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        });
    }

    ngOnDestroy() {
      this.postsSub.unsubscribe();
    }
}
