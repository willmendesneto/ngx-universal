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
  styles: [`
  @import '/assets/_include-media.scss';

  .home-page-footer {
    display: flex;
    width: 100%;
    padding-top: 20vh;
    background-color: #FAFAFA;
    bottom: 0;
    border-top: 1px solid #e4e3e3;
  }

  .home-page-footer-wrapper {
    width: 95%;
    margin: 0 auto;
    text-align: right;

    @include media('>=tablet') {
      width: 500px;
    }

    @include media('>=desktop') {
      width: 900px;
    }
  }

  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
