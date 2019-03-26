import { Component, Input } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts =[ o post seria assim
  //   { title: 'Primeiro Post', content: 'Conteúdo do primeiro post' },
  //   { title: 'Segundo Post', content: 'Conteúdo do segundo post' },
  //   { title: 'Terceiro Post', content: 'Conteúdo do terceiro post' }
  // ];
  @Input() posts: Post[] = [

  ];
}
