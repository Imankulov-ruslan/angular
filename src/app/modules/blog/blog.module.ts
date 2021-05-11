import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './components/posts/posts.filter.pipe'


@NgModule({
  declarations: [PostsComponent, HeaderComponent, LayoutComponent, FilterPipe],
  imports: [
    CommonModule,
    BlogRoutingModule,
    // MaterialModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class BlogModule { }
