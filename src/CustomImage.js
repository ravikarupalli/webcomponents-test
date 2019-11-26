// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

class CustomImage extends LitElement {
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

      .thumbnail img {
        opacity: 0.8;
        cursor: pointer;
      }

      .thumbnail img:hover {
        opacity: 1;
      }
    `;
  }

  render() {
    return html`
      <img src="${this.src}" alt="${this.alt}" title="${this.title}" class="thumbnail" />
    `;
  }
}

customElements.define('custom-image', CustomImage);
