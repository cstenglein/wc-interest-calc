import { newE2EPage } from '@stencil/core/testing';

describe('interest-result', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<interest-result></interest-result>');

    const element = await page.find('interest-result');
    expect(element).toHaveClass('hydrated');
  });
});
