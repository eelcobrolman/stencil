import { Component, Event, EventEmitter, State } from '../../../../dist';

@Component({
  tag: 'lifecycle-basic-slots-b'
})
export class LifecycleBasicSlotsB {

  @State() rendered = 0;

  @Event() lifecycleLoad: EventEmitter;

  componentWillLoad() {
    this.lifecycleLoad.emit('componentWillLoad-b');
  }

  componentDidLoad() {
    this.lifecycleLoad.emit('componentDidLoad-b');
  }

  render() {
    this.rendered++;

    return (
      <div>
        <hr/>
        <div class='rendered-b'>
          rendered b: {this.rendered}
        </div>
        <slot/>
      </div>
    );
  }
}
