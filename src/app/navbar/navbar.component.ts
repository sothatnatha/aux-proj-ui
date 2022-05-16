import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.getToggleMoibileMenu();
    this.getHeaderFixed();
    this.getResizeWindow();
  }

  getToggleMoibileMenu() {
    let isToggleMenuClicked = false;
    document
      .querySelector('.pageMobileIcons')
      ?.addEventListener('click', function (e) {
        const mobileDropDownNav = document.querySelector(
          '.mobileDropDownMenuContainer'
        );
        if (isToggleMenuClicked) {
          mobileDropDownNav?.classList.remove(
            'mobileDropDownMenuContainer-active'
          );
        } else {
          mobileDropDownNav?.classList.add(
            'mobileDropDownMenuContainer-active'
          );
        }
        isToggleMenuClicked = !isToggleMenuClicked;
      });
  }

  getHeaderFixed() {
    const headerContainer = document.querySelector('.header-container');
    document.addEventListener('scroll', function (e) {
      if (window.scrollY > 0) {
        headerContainer?.classList.add('headerContainerActive');
      } else {
        headerContainer?.classList.remove('headerContainerActive');
      }
    });
  }

  getResizeWindow() {
    window.addEventListener('resize', function (e) {
      console.log(this.innerWidth);
      const resizeMobileMenu = document.querySelector(
        '.mobileDropDownMenuContainer'
      );
      if (this.innerWidth > 991.98) {
        resizeMobileMenu?.classList.add('mobileDropDownMenuContainer-Inactive');
        console.log(resizeMobileMenu);
      } else {
        resizeMobileMenu?.classList.remove(
          'mobileDropDownMenuContainer-Inactive'
        );
      }
    });
  }
}
