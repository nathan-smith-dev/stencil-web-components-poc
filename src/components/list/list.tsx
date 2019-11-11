import { Component, h, Prop, Host, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'ns-list',
  styleUrl: './list.css',
  shadow: true
})
export class List {
  @Prop({ mutable: true })
  items: string[];

  @Event()
  listEmitted: EventEmitter;

  render() {
    const itemsArr = this.convertItemsToArray(this.items);
    const items = itemsArr.map(i => <ns-list-item>{i}</ns-list-item>);
    return (
      <Host>
        <div>List Works</div>
        <ul>{items}</ul>
        <button onClick={this.handleClick}>Emit Information</button>
      </Host>
    );
  }

  convertItemsToArray(items: any) {
    if (Array.isArray(items)) {
      console.log('items already an array');
      return items;
    } else if (typeof items === 'string') {
      console.log('turn string to array');
      return JSON.parse(items);
    } else {
      console.log('default', typeof items);
      return [];
    }
  }

  handleClick = () => {
    // console.log('Button Clicked');
    this.listEmitted.emit({ data: this.items });
  };
}
