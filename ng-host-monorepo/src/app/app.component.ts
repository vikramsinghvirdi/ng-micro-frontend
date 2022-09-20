import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Micro Frontends';
  activeTab = 'mfe01';
  sub: Subscription = new Subscription();
  constructor(private readonly router: Router) {
    this.sub.add(this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
       this.activeTab = val.url
      }
  }));
  }

  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname.substr(1) || '/');
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1) || '/');
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
