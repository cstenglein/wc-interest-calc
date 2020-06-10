import { Component, ComponentInterface, h, State, Element, Prop } from '@stencil/core';
import { calcStartAmount, calcInterest, calcDuration, calcEndAmount } from '../../utils/utils';

@Component({
  tag: 'interest-calc',
  styleUrl: 'interest-calc.css',
  shadow: true,
})
export class InterestCalc implements ComponentInterface {
  @State() value: string;
  @Element() el: HTMLElement;
  @State() finalAmount: string;
  @Prop() checked = '';

  handleSubmit(e: Event) {
    e.preventDefault();

    const startAmount = +this.getInputElem('startAmount').value;
    const interest = +this.getInputElem('interest').value;
    const duration = +this.getInputElem('duration').value;
    // const endAmount = +this.getInputElem("endAmount").value;
    const checkedElem = this.getInputElem(this.checked);

    switch (this.checked) {
      case 'startAmount':
        checkedElem.value = calcStartAmount();
        break;
      case 'interest':
        checkedElem.value = calcInterest();
        break;
      case 'duration':
        checkedElem.value = calcDuration();
        break;
      case 'endAmount':
        checkedElem.value = calcEndAmount(startAmount, interest, duration);
        break;
    }
  }

  componentWillLoad() {
    if (!this.checked) {
      this.checked = 'endAmount';
    }
  }

  updateChecked() {
    this.checked = (this.el.shadowRoot.querySelector('input[name="calcType"]:checked') as HTMLInputElement).value;
    this.getInputElem(this.checked).value = '';
  }

  getInputElem(id: string) {
    return this.el.shadowRoot.getElementById(id) as HTMLInputElement;
  }

  render() {
    return [
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Zinsrechner</h2>
        <div class="center">
          <input
            type="radio"
            id="startAmountRadio"
            name="calcType"
            value="startAmount"
            onClick={this.updateChecked.bind(this)}
          />
          <label> Anfangskapital</label>
          <input
            type="radio"
            id="interestRadio"
            name="calcType"
            value="interest"
            onClick={this.updateChecked.bind(this)}
          />
          <label> Zinssatz</label>
          <input
            type="radio"
            id="durationRadio"
            name="calcType"
            value="duration"
            onClick={this.updateChecked.bind(this)}
          />
          <label> Laufzeit</label>
          <input
            type="radio"
            id="endAmountRadio"
            name="calcType"
            value="endAmount"
            onClick={this.updateChecked.bind(this)}
            checked
          />
          <label> Endkapital</label>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <div class="tooltip">
                  ?<span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Anfangskapital</td>
              <td>
                <input id="startAmount" disabled={this.checked === 'startAmount'} /> €
              </td>
            </tr>
            <tr>
              <td>
                <div class="tooltip">
                  ?<span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Zinssatz</td>
              <td>
                <input id="interest" disabled={this.checked === 'interest'} /> % p.a.
              </td>
            </tr>
            <tr>
              <td>
                <div class="tooltip">
                  ?<span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Laufzeit</td>
              <td>
                <input id="duration" disabled={this.checked === 'duration'} /> Jahre
              </td>
            </tr>
            <tr>
              <td>
                <div class="tooltip">
                  ?<span class="tooltiptext">Tooltip text</span>
                </div>
              </td>
              <td>Endkapital</td>
              <td>
                <input id="endAmount" disabled={this.checked === 'endAmount'} /> €
              </td>
            </tr>
          </tbody>
        </table>
        <div class="submit">
          <button type="submit">Berechnen</button>
        </div>
      </form>,
    ];
  }
}
