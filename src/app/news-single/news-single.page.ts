import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  article;

  constructor(private myService: NewsService, private router: Router) { }

  ngOnInit() {
     this.article = this.myService.currentArticle;
  }

}
