//nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

toggle.addEventListener('click',()=>links.classList.toggle('show-links'));

//dark-theme

const darkThemeBtn = document.querySelector('.dark-theme-btn');

darkThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
  });
  

//blog article
const articlesContainer = document.querySelector('.articles-container');

const articleHTML = articles.map((article)=>{
    const {id, title, date, length, content} = article;
    return `<article>
    <h3>${title}</h3>
    <div class="post-info">
        <span>October 4th, 2020</span>
        <span>11 min read</span>
    </div>
    <p>
        ${content}
    </p>
</article>`;
}).join('');

articlesContainer.innerHTML = articleHTML;

