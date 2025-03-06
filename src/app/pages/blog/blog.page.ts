import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, BlogListComponent],
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Blog | Michele Cirasola - Sviluppatore Frontend');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Blog tecnico con articoli e tutorial su Angular, TypeScript, e sviluppo web moderno. Approfondimenti e best practices per sviluppatori frontend.' 
    });
  }
}