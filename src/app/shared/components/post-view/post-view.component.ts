import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  @Input() post: Post;

  constructor() {}

  ngOnInit(): void {
  }

}
