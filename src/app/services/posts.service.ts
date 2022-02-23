import { Injectable } from '@angular/core';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  async getPosts(): Promise<Post[]> {
    return [
      {
        title: 'This is the title of out post',
        author: 'elVengador',
        date: '12/12/12',
        tags: ['Angular', 'Cli', 'Linux'],
        content: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Magnam excepturi molestiae voluptate ipsam qui tempore vitae.
        Fuga iste earum nesciunt omnis minus. Vitae commodi culpa illum quos magni debitis deserunt?
        `
      },
      {
        title: 'how to configure a project from zero',
        author: 'Jimy',
        date: '10/12/12',
        tags: ['Js', 'Webpack'],
        content: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Magnam excepturi molestiae voluptate ipsam qui tempore vitae.
        Fuga iste earum nesciunt omnis minus. Vitae commodi culpa illum quos magni debitis deserunt?
        `
      }
    ]
  }
}
