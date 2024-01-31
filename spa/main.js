import Blog from "./components/blog.js";
import About from "./components/about.js";

const app = document.querySelector(".App");

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("moveToAboutBtn")) {
        app.innerHTML = Blog;
    } else if (e.target.classList.contains("moveToBlogBtn")) {
        app.innerHTML = About;
    }
});