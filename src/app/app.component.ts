import { Component } from '@angular/core';

@Component({ // decorator
  selector: 'app-root', // permite usar o componente em templates em sua forma declarativa  <app-root>
  templateUrl: './app.component.html', // diz qual é a apresentação desse componente
  styleUrls: ['./app.component.css'] // determina o Css desse componente
})
export class AppComponent { // classe es6

  photos = [
    {
      url: 'https://nypdecider.files.wordpress.com/2019/05/one-punch-man-season-2-episode-6.jpg?quality=90&strip=all&w=646&h=431&crop=1',
      description: "Saitama 1"
    },
    {
      url: "https://www.geek.com/wp-content/uploads/2017/06/saitamamain-625x352.png ",
      description: "Saitama 2"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxc0pJ8XNU-IxJjAlt06jHX9XkYGJmY-2IkLjeq48ZeOAsVhn ",
      description: "Saitama 3"
    }
    
  ];
}
