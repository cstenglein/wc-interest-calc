import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'interest-result',
  styleUrl: 'interest-result.css',
  shadow: true,
})
export class InterestResult implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
