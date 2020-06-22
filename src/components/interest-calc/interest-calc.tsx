import { Component, ComponentInterface, h, Element, Prop } from '@stencil/core';
import { calcInterest, calcDuration, calcPrincipal, calcFinalAmount } from '../../utils/utils';

@Component({
  tag: 'wc-interest-calc',
  styleUrl: 'interest-calc.css',
  shadow: true,
})
export class InterestCalc implements ComponentInterface {
  @Element() el: HTMLElement;
  @Prop() checked = 'finalAmount';
  @Prop({ reflect: true, mutable: true }) principal = 0;
  @Prop({ reflect: true, mutable: true }) interest = 0;
  @Prop({ reflect: true, mutable: true }) duration = 0;
  @Prop({ reflect: true, mutable: true }) finalAmount = 0;

  handleSubmit(e: Event) {
    e.preventDefault();
    // update values at time of submission
    this.principal = +this.getInputElem('principal').value;
    this.interest = +this.getInputElem('interest').value;
    this.duration = +this.getInputElem('duration').value;
    this.finalAmount = +this.getInputElem('finalAmount').value;

    switch (this.checked) {
      case 'principal':
        this.principal = calcPrincipal(this.interest, this.duration, this.finalAmount);
        break;
      case 'interest':
        this.interest = calcInterest(this.principal, this.duration, this.finalAmount);
        break;
      case 'duration':
        this.duration = calcDuration(this.principal, this.interest, this.finalAmount);
        console.log(this.duration);
      case 'finalAmount':
        this.finalAmount = calcFinalAmount(this.principal, this.interest, this.duration);
        break;
    }
  }

  updateChecked(e: Event) {
    this.checked = (e.target as HTMLInputElement).value;
  }

  getInputElem(id: string) {
    return this.el.shadowRoot.getElementById(id) as HTMLInputElement;
  }

  render() {
    return [
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div class="radio center">
          <input
            type="radio"
            id="principalRadio"
            name="calcType"
            value="principal"
            onClick={this.updateChecked.bind(this)}
          />
          <label> Principal</label>
          <input
            type="radio"
            id="interestRadio"
            name="calcType"
            value="interest"
            onClick={this.updateChecked.bind(this)}
          />
          <label> Interest</label>
          <input
            type="radio"
            id="durationRadio"
            name="calcType"
            value="duration"
            onClick={this.updateChecked.bind(this)}
          />
          <label> Duration</label>
          <input
            type="radio"
            id="finalAmountRadio"
            name="calcType"
            value="finalAmount"
            onClick={this.updateChecked.bind(this)}
            checked
          />
          <label> End Amount</label>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Principal</td>
              <td>
                <input id="principal" disabled={this.checked === 'principal'} value={this.principal} /> $
              </td>
            </tr>
            <tr>
              <td>Interest</td>
              <td>
                <input id="interest" disabled={this.checked === 'interest'} value={this.interest} /> % p.a.
              </td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>
                <input id="duration" disabled={this.checked === 'duration'} value={this.duration} /> Years
              </td>
            </tr>
            <tr>
              <td>Final Amount</td>
              <td>
                <input id="finalAmount" disabled={this.checked === 'finalAmount'} value={this.finalAmount} /> $
              </td>
            </tr>
          </tbody>
        </table>
        <div class="submit">
          <button type="submit">Calculate</button>
        </div>
      </form>,
    ];
  }
}
