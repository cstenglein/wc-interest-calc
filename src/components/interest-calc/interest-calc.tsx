import { Component, ComponentInterface, h, State, Element } from '@stencil/core';

@Component({
  tag: 'interest-calc',
  styleUrl: 'interest-calc.css',
  shadow: true,
})
export class InterestCalc implements ComponentInterface {

  @State() value: string;
  @Element() el: HTMLElement;
  @State() finalAmount: string;
  @State() checked = 'ek';

  formatter = new Intl.NumberFormat('de-de', {
    style: 'currency',
    currency: 'EUR',
  });

  handleSubmit(e: Event) {
    e.preventDefault();
    switch (this.checked) {
      case 'ak':
        this.calcAk();
        break;
      case 'zs':
        this.calcZs();
        break;
      case 'lz':
        this.calcLz();
        break;
      case 'ek':
        this.calcEk();
        break;
    }
  }

  calcAk() {
    let finalAmount = 0;
    (this.el.shadowRoot.getElementById('startAmount') as HTMLInputElement).value = '' + finalAmount;
  }

  calcZs() {
    let finalAmount = 0;
    (this.el.shadowRoot.getElementById('interest') as HTMLInputElement).value = '' + finalAmount;
  }

  calcLz() {
    let finalAmount = 0;
    (this.el.shadowRoot.getElementById('duration') as HTMLInputElement).value = '' + finalAmount;
  }

  calcEk() {
    let finalAmount = 0;
    (this.el.shadowRoot.getElementById('endAmount') as HTMLInputElement).value = '' + finalAmount;
  }

  updateChecked() {
    const elem = this.el.shadowRoot.querySelector('input[name="calcType"]:checked')
    this.checked = elem.id;
    switch (this.checked) {
      case 'ak':
        (this.el.shadowRoot.getElementById('startAmount') as HTMLInputElement).value = '';
        break;
      case 'zs':
        (this.el.shadowRoot.getElementById('interest') as HTMLInputElement).value = '';
        break;
      case 'lz':
        (this.el.shadowRoot.getElementById('duration') as HTMLInputElement).value = '';
        break;
      case 'ek':
        (this.el.shadowRoot.getElementById('endAmount') as HTMLInputElement).value = '';
        break;
    }

    console.log(this.checked);
  }

  render() {
    return [
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Zinsrechner</h2>
        <div class="center">
          <input type="radio" id="ak" name="calcType" value="Anfangskapital" onClick={this.updateChecked.bind(this)} />
          <label> Anfangskapital</label>
          <input type="radio" id="zs" name="calcType" value="Zinssatz" onClick={this.updateChecked.bind(this)} />
          <label> Zinssatz</label>
          <input type="radio" id="lz" name="calcType" value="Laufzeit" onClick={this.updateChecked.bind(this)} />
          <label> Laufzeit</label>
          <input type="radio" id="ek" name="calcType" value="Endkapital" checked onClick={this.updateChecked.bind(this)} />
          <label> Endkapital</label>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <div class="tooltip">?
                  <span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Anfangskapital</td>
              <td><input id="startAmount" disabled={this.checked === 'ak'} /> €</td>
            </tr>
            <tr>
              <td>
                <div class="tooltip">?
                  <span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Zinssatz</td>
              <td><input id="interest" disabled={this.checked === 'zs'} /> % p.a.</td>
            </tr>
            <tr>
              <td>
                <div class="tooltip">?
                  <span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Laufzeit</td>
              <td><input id="duration" disabled={this.checked === 'lz'} /> Jahre</td>
            </tr>
            <tr>
              <td>
                <div class="tooltip">?
                  <span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Endkapital</td>
              <td><input id="endAmount" disabled={this.checked === 'ek'} /> €</td>
            </tr>
          </tbody>
        </table>
        <div class="submit">
          <button type="submit">Berechnen</button>
        </div>
      </form>
    ];
  }

}
