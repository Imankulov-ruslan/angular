import { Post } from './../../../../core/interfaces/post';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent {

  post: Post;

  @Input('post') set setPost(post: Post) {
    if (!post) {
      return;
    }
    this.post = post;
    this.form.patchValue(post);
  };

  @Output() onSubmit: EventEmitter<Post> = new EventEmitter<Post>();

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
    author: new FormControl(''),
    dateCreatedAt: new FormControl(''),
    tags: new FormControl(''),
  });

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.onSubmit.emit({
      id: this.post.id,
      ...this.form.value,
    });
  }
}
