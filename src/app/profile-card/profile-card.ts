import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = `I am an aspiring web developer who wants to turn creative ideas into functional and meaningful websites. I enjoy learning how websites are built and discovering how different programming languages work together to create a smooth user experience. I am currently improving my skills in HTML, CSS, JavaScript, TypeScript, and Angular through school activities and personal projects. I also want to develop my creativity by experimenting with website layouts, colors, and interactive features. My goal is to become a confident and capable developer who can create useful applications, solve technical challenges, and adapt to new technologies. In the future, I hope to gain real-world experience, work with other developers, and build projects that people can enjoy and benefit from.`;
}
