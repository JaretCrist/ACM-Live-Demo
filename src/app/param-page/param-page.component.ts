import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-param-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './param-page.component.html',
  styleUrl: './param-page.component.scss',
})
export class ParamPageComponent implements OnInit {
  queryMode = true;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  name: string = '';

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      if (params['name']) {
        this.name = params['name'];
      } else {
        this.name = '';
      }
    });
  }

  changeHeader(): void {
    if (this.queryMode) {
      this.router.navigate(['/home'], {
        queryParams: { name: 'ACM Club Members' },
      });
    } else {
      this.router.navigate(['/home']);
    }

    this.queryMode = !this.queryMode;
  }
}
