console.log('hello javascript');
console.log('hello world');
let parentele = document.querySelector('.row');
let article = document.createElement('div');
article.classList.add('article');

let title = document.createElement('h2');
title.textContent = 'Article title1';

let image = document.createElement('img');
image.src = "https://images.unsplash.com/photo-1587613863152-ecc4f2ea3dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60";
image.alt = "laptop image";
image.classList.add('img-class');

let para = document.createElement('p');
para.textContent = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
People also ask';

let tagpara = document.createElement('p');
let tagspan = document.createElement('span');
tagspan.classList.add('article-tag');
tagspan.textContent = 'learnmore';

tagpara.appendChild(tagspan);

article.insertAdjacentElement('afterbegin', title);
article.insertAdjacentElement('beforeend', image);
article.insertAdjacentElement('beforeend', para);
article.insertAdjacentElement('beforeend', tagpara);

console.log(article);
parentele.insertAdjacentElement('beforebegin', article);
