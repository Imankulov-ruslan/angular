import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from 'src/app/shared/components/post/post.component';
import { PostResolver } from 'src/app/shared/resolvers/post.resolver';



/**
 *  Client side
 *  'blog/posts' => 
 *  'blog/posts/:id' => 
 */


const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { 
        path: 'posts/:id', 
        component: PostComponent,
        resolve: {
          post: PostResolver
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
