import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostsService } from '../../services/posts.service';

const examplePost: Post = {
  title: 'This is the title of out post',
  author: 'elVengador',
  date: '12/12/12',
  tags: ['Angular', 'Cli', 'Linux'],
  content: `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Magnam excepturi molestiae voluptate ipsam qui tempore vitae.
  Fuga iste earum nesciunt omnis minus. Vitae commodi culpa illum quos magni debitis deserunt?
  `
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = examplePost
  suggestedPosts: Post[] = []

  constructor(private postsService: PostsService) { }

  async ngOnInit() {
    await this.getSuggestions()
  }

  formatTag(tag: string) {
    return `#${tag}`
  }

  async getSuggestions() {
    this.suggestedPosts = await this.postsService.getPosts()
  }

}
