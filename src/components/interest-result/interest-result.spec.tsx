import { newSpecPage } from '@stencil/core/testing';
import { InterestResult } from './interest-result';

describe('interest-result', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InterestResult],
      html: `<interest-result></interest-result>`,
    });
    expect(page.root).toEqualHtml(`
      <interest-result>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </interest-result>
    `);
  });
});
