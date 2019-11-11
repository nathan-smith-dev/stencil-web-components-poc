import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ns-list-item',
  styleUrl: './list-item.css',
  shadow: true
})
export class ListItem {
  render() {
    return (
      <Host>
        <li>
          <slot />
        </li>
      </Host>
    );
  }
}
