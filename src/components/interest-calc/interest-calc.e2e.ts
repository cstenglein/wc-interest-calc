import { newE2EPage } from '@stencil/core/testing';

describe('interest-calc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<interest-calc></interest-calc>');

    const element = await page.find('interest-calc');
    expect(element).toHaveClass('hydrated');
  });
});
