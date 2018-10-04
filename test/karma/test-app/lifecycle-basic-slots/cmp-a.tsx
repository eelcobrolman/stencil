import { Component, Listen, State } from '../../../../dist';

@Component({
  tag: 'lifecycle-basic-slots-a'
})
export class LifecycleBasicSlotsA {

  @State() rendered = 0;
  @State() loads: string[] = [];
  @State() updates: string[] = [];

  @Listen('lifecycleLoad')
  lifecycleLoad(ev: any) {
    this.loads = [...this.loads, ev.detail];
  }

  componentWillLoad() {
    this.loads = [...this.loads, 'componentWillLoad-a'];
  }

  componentDidLoad() {
    this.loads = [...this.loads, 'componentDidLoad-a'];
  }

  render() {
    this.rendered++;

    return (
      <div>
        <hr/>
        <div class='rendered-a'>
          rendered a: {this.rendered}
        </div>
        <div>loads a:</div>
        <ol class='lifecycle-loads-a'>
          {this.loads.map(load => {
            return <li>{load}</li>
          })}
        </ol>
        <slot/>
      </div>
    );
  }
}
