// your JavaScript file

//Note to self: element factory?

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const content_p = document.createElement('p');
content_p.setAttribute('style', 'color:red;');
content_p.textContent = `Hey I\'m red!`;
container.appendChild(content_p);

const content_h3 = document.createElement('h3');
content_h3.setAttribute('style', 'color:blue;');
content_h3.textContent = `Hey I\'m a blue h3!`;
container.appendChild(content_h3);

const content_div = document.createElement('div');
content_div.setAttribute(
    'style', 
    'border: 1px solid black; \
     background-color: pink; \
    ');
container.append(content_div);

const content_h1 = document.createElement('h1');
content_h1.textContent = "I am in a div";
content_div.appendChild(content_h1);

const content_pp = document.createElement('p');
content_pp.textContent = "Me too!";
content_div.appendChild(content_pp);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World!");

const bestn = document.querySelector('#bestn');
bestn.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
});


const allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
    button.addEventListener('click',() => {
        console.log(button.id);
    })
});