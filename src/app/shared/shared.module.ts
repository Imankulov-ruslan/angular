import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './components/post-view/post-view.component';
import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { GlobalPreloaderComponent } from './components/global-preloader/global-preloader.component';



@NgModule({
  declarations: [PostViewComponent, FooterComponent, PostComponent, GlobalPreloaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    PostViewComponent,
    MaterialModule,
    ReactiveFormsModule,
    FooterComponent,
    PostComponent,
    GlobalPreloaderComponent
  ]
})
export class SharedModule { }
