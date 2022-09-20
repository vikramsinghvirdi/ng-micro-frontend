import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clarity Angular App';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname.substr(1) || '/');
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1) || '/');
    });

    // appType == 'microfrontend'
    connectRouter(this.router);
  }
}
