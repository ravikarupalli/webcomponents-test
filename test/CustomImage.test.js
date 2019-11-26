/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../src/CustomImage.js';

describe('Custom Image', () => {
  it('correct structure test', async () => {
    const el = await fixture(html`
      <custom-image src="../assets/image1.jpg" alt="caption1" title="caption1"></custom-image>
    `);
    expect(el).shadowDom.to.equal(
      `<image class="thumbnail" src="../assets/image1.jpg" alt="caption1" title="caption1">`,
    );
  });

  it('without alt', async () => {
    const el = await fixture(html`
      <custom-image src="../assets/image1.jpg" title="caption1"></custom-image>
    `);
    expect(el).shadowDom.to.equal(
      `<image class="thumbnail" src="../assets/image1.jpg" alt="" title="caption1">`,
    );
  });

  it('without title', async () => {
    const el = await fixture(html`
      <custom-image src="../assets/image1.jpg" alt="caption1"></custom-image>
    `);
    expect(el).shadowDom.to.equal(
      `<image class="thumbnail" src="../assets/image1.jpg" alt="caption1" title="" >`,
    );
  });
});
