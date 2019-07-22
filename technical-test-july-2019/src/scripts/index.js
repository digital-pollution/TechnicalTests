import '../styles/index.scss';
import { data } from '../data/data.js';

const App = {
  init: function() {
    this.isMobile = window.matchMedia('(max-width: 600px)');
    this.desktopNav = document.getElementById('desktopNav');
    this.itemContent = document.getElementById('itemContent');

    this.loadData();
  },
  loadData: function() {
    const generatedDesktopNav = [];
    const generatedContent = [];

    data.map((item, index) => {
      let buttonCss = (index === 0) ? 'selected' : '';
      let contentCss = (index === 0) ? 'show' : '';

      const fullname = this.stripTags([item.firstName, item.lastName].join(' '));

      generatedDesktopNav.push(`
        <button class="${buttonCss}" data-itemid="${fullname.replace(/ /g, '')}-${item.id}">
          ${fullname}
        </button>`);

      generatedContent.push(`
        <div class="item">
          <button class="${buttonCss}" data-itemid="${fullname.replace(/ /g, '')}-${item.id}">
            ${fullname}
          </button>
          <div class="item-content ${contentCss}" id="${fullname.replace(/ /g, '')}-${item.id}">
            <div class="image-wrapper">
              <div class="image-mask">
                <img src="../${item.picture}" />
              </div>
            </div>
            <strong data-itemid="${fullname.replace(/ /g, '')}-${item.id}">
              ${fullname}
            </strong>
            <p>${this.stripTags(item.bio)}</p>
          </div>
        </div>
        `);
    });

    this.renderFragment(generatedDesktopNav, generatedContent);
  },
  stripTags: function(str) {
    return str.replace(/<script.*?>[\s\S]*?<\/script>/ig, '');
  },
  renderFragment: function(generatedDesktopNav, generatedContent) {
    this.desktopNav.innerHTML = `<div class="border"></div>${generatedDesktopNav.join('')}`;
    this.itemContent.innerHTML = generatedContent.join('');

    this.bindEvents();
  },
  toggleContent: function(e) {
    this.itemContent.getElementsByClassName('show')[0].classList.remove('show');

    document.getElementById(e.target.dataset.itemid).classList.add('show');

    document.querySelectorAll('.selected').forEach((element) => {
      element.classList.remove('selected');
    });

    document.querySelectorAll(`button[data-itemid="${e.target.dataset.itemid}"]`).forEach((element) => {
      element.classList.add('selected');
    });
  },
  bindEvents: function() {
    this.desktopNav.addEventListener('click', (e) => {
      if (!e.target.dataset.itemid) return false;
      this.toggleContent(e);
    });

    this.itemContent.addEventListener("click", (e) => {
      if (!e.target.dataset.itemid || !this.isMobile.matches) return false;
      this.toggleContent(e);
    });
  }
};

App.init();
