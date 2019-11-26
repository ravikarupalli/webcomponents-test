// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

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
    mediumImage.src = event.target.__src;
    mediumImage.alt = event.target.__alt;
    mediumImage.title = event.target.__title;
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

  render() {
    return html`
      <div id="mediumDiv" class="medium-container">
        <img id="expanded-img" style="width:80%; height: 450px;" @click=${this.makeImageFullSize}""
        >
        <div id="image-list" class="image-list" @click=${this.displayMediumImage}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('image-gallery', ImageGallery);
