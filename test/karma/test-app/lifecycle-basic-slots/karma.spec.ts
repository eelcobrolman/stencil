import { setupDomTests } from '../util';


describe('lifecycle-basic-slots', function() {
  const { setupDom, tearDownDom } = setupDomTests(document);
  let app: HTMLElement;

  beforeEach(async () => {
    app = await setupDom('/lifecycle-basic-slots/index.html');
  });
  afterEach(tearDownDom);

  it('fire load methods in order', async () => {
    let loads = app.querySelectorAll('.lifecycle-loads-a li');
    console.log(loads);
    expect(loads.length).toBe(6);
    expect(loads[0].textContent).toBe('componentWillLoad-a');
    expect(loads[1].textContent).toBe('componentWillLoad-c');
    expect(loads[2].textContent).toBe('componentWillLoad-b');
    expect(loads[3].textContent).toBe('componentDidLoad-b');
    expect(loads[4].textContent).toBe('componentDidLoad-c');
    expect(loads[5].textContent).toBe('componentDidLoad-a');

  });

});
