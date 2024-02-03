import Blog from "./components/blog.js";
import About from "./components/about.js";

const app = document.querySelector(".App");

const routes = {
    blog: {
        url: './blog',
        component: Blog
    },
    about: {
        url: './about',
        component: About
    }
}

const setRoute = (page) => {
    history.pushState(null, null, routes[page].url);
    app.innerHTML = routes[page].component + `<my-custom-element size="10">${page} custom</my-custom-element>`;
}

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("moveToAboutBtn")) {
        setRoute("blog");
    } else if (e.target.classList.contains("moveToBlogBtn")) {
        setRoute("about");
    }
});



// Create a class for the element
class MyCustomElement extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
        );
    }
}

customElements.define("my-custom-element", MyCustomElement);

// Create a class for the element
class PopupInfo extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({
            mode: "open"
        });

        // Create spans
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        // Take attribute content and put it inside the info span
        const text = this.getAttribute("data-text");
        info.textContent = text;

        // Insert icon
        let imgUrl;
        if (this.hasAttribute("img")) {
            imgUrl = this.getAttribute("img");
        } else {
            imgUrl = "img/default.png";
        }

        const img = document.createElement("img");
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
        console.log(style.isConnected);

        style.textContent = `
        .wrapper {
          position: relative;
        }
  
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
  
        img {
          width: 1.2rem;
        }
  
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define("popup-info", PopupInfo);

class ShowdowElement extends HTMLElement {
    // Disable shadow DOM for this element.
    // static disabledFeatures = ["shadow"];

    constructor() {
        super();

        this.attachShadow({
            mode: "open"
        });

        this.shadowRoot.innerHTML = `
            <form method="dialog">
                <slot name="content"></slot>
                <button>확인</button>
                <slot name="title"></slot>
            </form>
            `;
    }

    connectedCallback() {}
}

// Define the new element
customElements.define("showdow-element", ShowdowElement);