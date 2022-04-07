
// codigo feito para gera o menu mobile.

class MobileNavbar {
    constructor(mobileMenu, navlist,navlinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }
  

    handleClick(){
        this.navlist.classList.toggle(this.activeClass);
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);

    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
}

}

const mobileNavbar = new MobileNavbar(".mobile-menu",".nav-list",".nav-list li",);
mobileNavbar.init();