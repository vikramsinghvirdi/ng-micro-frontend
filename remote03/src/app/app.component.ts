import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Webcomponent App';

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
