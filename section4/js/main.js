// const ilbuni = document.querySelector('.ilbuni:nth-child(2)');
const ilbuni = document.querySelector('.c');
//첫번째꺼 가져옴

const char = document.querySelector('.characters');
char.setAttribute('data-id', 123);
// char.setAttribute('class', 'foo');

char.dataset.id = 777;
char.dataset.title = '안녕!';

console.log(char.dataset);
// console.log(char.dataset.title);

const pElem = document.createElement('p');
