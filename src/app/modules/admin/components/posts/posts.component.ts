import { Post } from './../../../../core/interfaces/post';
import { PostsService } from 'src/app/core/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showPreloader=true;
  dataSource: Post[] = [];
  displayedColumns: string[] = ['id', 'title', 'author', 'tags', 'actions'];

  constructor(
    private readonly postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.postsService.find().pipe(
      delay(1000)
    ).subscribe(
      (posts: Post[]) => this.dataSource = posts
    );
    window.setTimeout(() => this.showPreloader = false, 2000)
  }

  remove(id: string): void {
    this.postsService.remove(id).pipe(
      tap(() => this.dataSource = this.dataSource.filter((post: Post) => post.id !== id))
    ).subscribe();
  }
}
