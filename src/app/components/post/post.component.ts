import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() title: string = '5 dicas para sua carreira profissional';
  @Input() description: string =
    'Conferem 5 dicas  que podem ajudar a alanvancar sua carreira como desenvolvedor front-end';
  constructor() {}
}
