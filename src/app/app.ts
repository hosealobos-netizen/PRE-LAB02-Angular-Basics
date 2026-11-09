
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Lobo Hosea Dwayne Javier';
  location = 'Porac, Pampanga, Philippines';
  email = 'hosealobos@gmail.com';
  phone = '0916 645 7614';

  profile = `I am an aspiring web developer who enjoys exploring how technology can turn creative ideas into useful digital experiences. I am interested in building websites that are visually appealing, organized, and easy to navigate. Through my studies and personal projects, I continue to develop my knowledge of HTML, CSS, JavaScript, TypeScript, and Angular. I also enjoy experimenting with different layouts, colors, and designs to improve the way websites look and function. My goal is to become a skilled developer who can create practical applications, solve problems through programming, and continuously grow by learning new technologies and gaining real-world experience.`;

  skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Responsive Web Design',
    'UI/UX Design',
    'Problem Solving',
    'Git and GitHub',
    'Basic Database Management'
  ];

  proficiencies = [
    {
      category: 'Frontend Development',
      technologies: 'HTML5, CSS3, JavaScript, TypeScript, Angular'
    },
    {
      category: 'Design and User Experience',
      technologies: 'Responsive Layouts, UI/UX Principles, Color Theory, Typography'
    },
    {
      category: 'Development Tools',
      technologies: 'Visual Studio Code, Git, GitHub, Command Prompt'
    }
  ];

  message = 'Welcome to my personal CV!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `Thanks for visiting my CV! Button clicked ${this.clickCount} time(s).`;
  }
}


