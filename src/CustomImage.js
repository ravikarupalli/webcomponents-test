// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

class CustomImage extends LitElement {
  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.title = '';
  }

  static get properties() {
    return {
      src: { type: String },
      alt: { type: String },
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      body {
        margin: 0;
        font-family: Arial;
      }

      .thumbnail {
        float: left;
        height: 120px;
        width: 10%;
        padding: 0px;
        position: relative;
      }

      img {
        opacity: 0.8;
        cursor: pointer;
      }

      img:hover {
        opacity: 1;
      }
    `;
  }

  render() {
    return html`
      <img
        src="${this.src}"
        alt="${this.alt === null ? '' : this.alt}"
        title="${this.title === null ? '' : this.title}"
        class="thumbnail"
      />
    `;
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(newValue) {
    this.setAttribute('src', newValue);
  }

  get alt() {
    return this.getAttribute('alt');
  }

  set alt(newValue) {
    this.setAttribute('alt', newValue);
  }

  get title() {
    return this.getAttribute('title');
  }

  set title(newValue) {
    this.setAttribute('title', newValue);
  }
}

customElements.define('custom-image', CustomImage);
