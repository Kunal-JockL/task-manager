import { Component} from '@angular/core';
import { ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  title = 'Task Tracker';
  i = 0;

  toogleAddTask(){
    this.i = this.i + 1;
    console.log(this.i);
  }
}
