// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import './CustomImage.js';

class ImageGallery extends LitElement {
  static get styles() {
    return css`
      .image-list:after {
        flex-grow: 1;
        align-items: center;
        width: 100%;
        justify-content: center;
        position: relative;
        display: flex;
      }
      .image-list {
        align-items: center;
        width: 100%;
        justify-content: center;
      }

      /* Container to show medium size image */
      .medium-container {
        position: relative;
        height: 80%;
        width: 80%;
        display: flex;
        flex-direction: column;
      }
    `;
  }

  displayMediumImage = event => {
    const mediumImage = this.shadowRoot.querySelector('[id="expanded-img"]');
    mediumImage.src = event.target.src;
    mediumImage.alt = event.target.alt;
    mediumImage.title = event.target.title;
  };

  makeImageFullSize = () => {
    const imageThumbDiv = this.shadowRoot.querySelector('[id="image-list"]');
    const mediumImage = this.shadowRoot.querySelector('[id="expanded-img"]');
    if (imageThumbDiv.style.display === 'none') {
      imageThumbDiv.style.display = 'block';
      mediumImage.style.width = '80%';
      mediumImage.style.height = '450px';
    } else {
      imageThumbDiv.style.display = 'none';
      mediumImage.style.width = '90%';
      mediumImage.style.height = '580px';
    }
  };

  loadFirstImage() {
    const imageGallery = document.querySelector('image-gallery');
    const mediumImage = this.shadowRoot.querySelector('[id="expanded-img"]');
    if (
      mediumImage.src === '' &&
      imageGallery.children[0] &&
      imageGallery.children[0].attributes[0]
    )
      mediumImage.src = imageGallery.children[0].attributes[0].value;
  }

  render() {
    return html`
      <div id="mediumDiv" class="medium-container">
        <img id="expanded-img" style="width:80%; height: 450px;" @click=${this.makeImageFullSize}"">
        <div id="image-list" class="image-list" @click=${this.displayMediumImage}>
          <slot></slot>
        </div>
      </div>
    `;
  }

  updated() {
    this.loadFirstImage();
  }
}

customElements.define('image-gallery', ImageGallery);
