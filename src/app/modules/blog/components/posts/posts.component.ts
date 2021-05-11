import { PostsService } from 'src/app/core/services/posts.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  page:number = 1;
  @Input() count:number = 0;
  pageSize:number = 3;
  searchText: string = "";

  posts: Post[] = [];

  constructor(
    private readonly postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.retrievePosts();
  }


  retrievePosts(): void {
    this.postsService.find().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrievePosts();
  }
  onKey(event: any) { // without type info
    this.page = 1;
    this.searchText = event.target.value;
    console.log(this.searchText)
  }
}