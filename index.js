import date from './modules/date.js';

import Navigation from './modules/navigation.js';

import Library from './modules/bookLibrary.js';

date();
const navigation = new Navigation();
navigation.navigationPage();

const book = new Library();
book.addBook();
book.display();
