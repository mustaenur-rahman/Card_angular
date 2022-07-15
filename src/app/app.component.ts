import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountain lover',
      content: 'I saw this neat mountain today'
    },
    {
      title: 'Bicycle',
      imageUrl: 'assets/biking.jpeg',
      username: 'bike lover',
      content: 'I saw this neat bike today'
    },
    {
      title: 'Bicycle1',
      imageUrl: 'assets/biking.jpeg',
      username: 'bike lover1',
      content: 'I saw this neat bike1 today'
    }
  ]
}
