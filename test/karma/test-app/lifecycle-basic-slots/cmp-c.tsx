import { Component, Event, EventEmitter, State } from '../../../../dist';

@Component({
  tag: 'lifecycle-basic-slots-c'
})
export class LifecycleBasicSlotsC {

  @State() rendered = 0;

  @Event() lifecycleLoad: EventEmitter;

  componentWillLoad() {
    this.lifecycleLoad.emit('componentWillLoad-c');
  }

  componentDidLoad() {
    this.lifecycleLoad.emit('componentDidLoad-c');
  }

  render() {
    this.rendered++;

    return (
      <div>
        <hr/>
        <div class='rendered-c'>
          rendered c: {this.rendered}
        </div>
        <slot/>
      </div>
    );
  }
}
