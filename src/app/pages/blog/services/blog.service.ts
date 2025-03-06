import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: BlogPost[] = [];

  getPosts(): Observable<BlogPost[]> {
    return of(this.posts);
  }

  getPostById(id: string): Observable<BlogPost | undefined> {
    return of(this.posts.find(post => post.id === id));
  }
}