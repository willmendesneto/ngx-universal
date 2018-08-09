import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="home-page-footer">
    <div class="home-page-footer-wrapper">
      <p>Built with ❤ by @willmendesneto</p>
    </div>
  </footer>
  `,
  styleUrls: ['./footer.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
