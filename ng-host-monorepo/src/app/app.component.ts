import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micro Frontends';
  activeTab = 'mfe01';
  constructor(private readonly router: Router) {
    this.navigate('mfe01');
  }

  navigate(url: string): void {
    this.router.navigateByUrl(url);
    this.activeTab = url;
  }
}
