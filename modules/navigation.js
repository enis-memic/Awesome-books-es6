export default class Navigation {
  constructor() {
    this.pageOne = document.querySelector('.book-list');
    this.pageTwo = document.querySelector('.add-books');
    this.pageThree = document.querySelector('.contact');

    this.listLink = document.querySelector('.list-page');
    this.addLink = document.querySelector('.add-page');
    this.contactLink = document.querySelector('.contact-page');
  }

  navigationPage() {
    this.listLink.addEventListener('click', () => {
      this.pageOne.style.display = 'flex';
      this.pageTwo.style.display = 'none';
      this.pageThree.style.display = 'none';
    });

    this.addLink.addEventListener('click', () => {
      this.pageOne.style.display = 'none';
      this.pageTwo.style.display = 'flex';
      this.pageThree.style.display = 'none';
    });

    this.contactLink.addEventListener('click', () => {
      this.pageOne.style.display = 'none';
      this.pageTwo.style.display = 'none';
      this.pageThree.style.display = 'flex';
    });
  }
}
