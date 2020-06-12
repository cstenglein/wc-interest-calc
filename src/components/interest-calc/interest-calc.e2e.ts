import { newE2EPage } from '@stencil/core/testing';

describe('interest-calc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-interest-calc></wc-interest-calc>');

    const element = await page.find('interest-calc');
    expect(element).toBeDefined();
  });
});
