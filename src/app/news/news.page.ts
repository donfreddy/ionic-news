import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;

  constructor(private myService: NewsService, private router: Router) { }

  ngOnInit() {
    this.myService.getData('everything?q=bitcoin&from=2020-01-11&sortBy=publishedAt')
      .subscribe(data => {
        this.data = data;   
      })
  }

  singleArticle(article) {
    this.myService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
