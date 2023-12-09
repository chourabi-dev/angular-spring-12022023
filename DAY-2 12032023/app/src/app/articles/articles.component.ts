import { Component, OnInit } from '@angular/core';
import { ArticleModel } from './model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:ArticleModel[] = [
    { title:'Angular spring', content:'test test test ',likes:25 },
    { title:'Angular spring', content:'test test test ',likes:25 },
    { title:'Angular spring', content:'test test test ',likes:25 },
    { title:'Angular spring', content:'test test test ',likes:25 },
    { title:'Angular spring', content:'test test test ',likes:25 },
    { title:'Angular spring', content:'test test test ',likes:25 },
    { title:'Angular spring', content:'test test test ',likes:25 },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
