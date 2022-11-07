import { Component, OnInit } from '@angular/core';

interface Post {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listPosts: Post[] = [
    {
      title: '5 dicas para sua carreira profissional',
      description:
        'Conferem 5 dicas  que podem ajudar a alanvancar sua carreira como desenvolvedor front-end',
    },
    {
      title: '5 dicas para sua carreira profissional',
      description:
        'Conferem 5 dicas  que podem ajudar a alanvancar sua carreira como desenvolvedor front-end',
    },
    {
      title: '5 dicas para sua carreira profissional',
      description:
        'Conferem 5 dicas  que podem ajudar a alanvancar sua carreira como desenvolvedor front-end',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
