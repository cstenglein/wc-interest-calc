import { newSpecPage } from '@stencil/core/testing';
import { InterestCalc } from './interest-calc';

describe('interest-calc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InterestCalc],
      html: `<interest-calc></interest-calc>`,
    });
    expect(page.root).toBeDefined();
  });
});
