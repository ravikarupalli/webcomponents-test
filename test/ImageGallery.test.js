/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../src/ImageGallery.js';

describe('Image Gallery', () => {
  it('without images', async () => {
    const el = await fixture(html`
      <image-gallery></image-gallery>
    `);
    expect(el).shadowDom.to.equal(`
    <div class="medium-container" id="mediumDiv">
    <img id="expanded-img" style="width:80%; height: 450px;">
    <div class="image-list" id="image-list">
      <slot>
      </slot>
    </div>
  </div>`);
  });

  it('with 1 image', async () => {
    const el = await fixture(html`
      <image-gallery>
        <custom-image src="../assets/image1.jpg" alt="caption1" title="caption1"></custom-image>
      </image-gallery>
    `);
    expect(el).shadowDom.to.equal(`
    <div class="medium-container" id="mediumDiv">
    <img id="expanded-img" src="../assets/image1.jpg" style="width:80%; height: 450px;">
    <div class="image-list" id="image-list">
      <slot>
        <custom-image src="" alt="" title="></custom-image>
      </slot>
    </div>
  </div>`);
  });

  it('with 2 images', async () => {
    const el = await fixture(html`
      <image-gallery>
        <custom-image src="../assets/image1.jpg" alt="caption1" title="caption1"></custom-image>
        <custom-image src="../assets/image2.jpg" alt="caption2" title="caption2"></custom-image>
      </image-gallery>
    `);
    expect(el).shadowDom.to.equal(`
    <div class="medium-container" id="mediumDiv">
    <img id="expanded-img" src="../assets/image1.jpg" style="width:80%; height: 450px;">
    <div class="image-list" id="image-list">
      <slot>
        <custom-image src="" alt="" title="></custom-image>
        <custom-image src="" alt="" title="></custom-image>
      </slot>
    </div>
  </div>`);
  });
});
