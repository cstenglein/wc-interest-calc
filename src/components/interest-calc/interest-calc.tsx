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
  @Prop() headerText = 'Interest Calculator';
  @Prop({ reflect: true, mutable: true }) principal = 0;
  @Prop({ reflect: true, mutable: true }) interest = 0;
  @Prop({ reflect: true, mutable: true }) duration = 0;
  @Prop({ reflect: true, mutable: true }) finalAmount = 0;
  @Prop({ reflect: true, mutable: true }) symbol = '$';

  handleSubmit(e: Event) {
    e.preventDefault();
    // update values at time of submission
    this.principal = +this.getInputElem('principal').value;
    this.interest = +this.getInputElem('interest').value;
    this.duration = +this.getInputElem('duration').value;
    this.finalAmount = +this.getInputElem('finalAmount').value;

    const interval = +(this.el.shadowRoot.querySelector('#interval') as HTMLSelectElement).value;

    switch (this.checked) {
      case 'principal':
        this.principal = calcPrincipal(this.interest, this.duration, this.finalAmount, interval);
        break;
      case 'interest':
        this.interest = calcInterest(this.principal, this.duration, this.finalAmount, interval);
        break;
      case 'duration':
        this.duration = calcDuration(this.principal, this.interest, this.finalAmount, interval);
        console.log(this.duration);
      case 'finalAmount':
        this.finalAmount = calcFinalAmount(this.principal, this.interest, this.duration, interval);
        break;
    }
  }

  updateChecked(e: Event): void {
    this.checked = (e.target as HTMLInputElement).value;
  }

  getInputElem(id: string): HTMLInputElement | null {
    return this.el.shadowRoot.getElementById(id) as HTMLInputElement;
  }

  render() {
    return [
      <h2 class="center">{this.headerText}</h2>,
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
            id="interesdivadio"
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
            id="finalAmoundivadio"
            name="calcType"
            value="finalAmount"
            onClick={this.updateChecked.bind(this)}
            checked
          />
          <label> End Amount</label>
        </div>
        <div class="center">
          <span>Interest period: </span>
          <select id="interval" name="interval">
            <option value="1" selected>
              Annual
            </option>
            <option value="2">Semi-Annual</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
          </select>
        </div>
        <div class="parent-container">
          <div>
            <div>Principal</div>
            <div class="input-container">
              <input id="principal" type="number" step="any" disabled={this.checked === 'principal'} value={this.principal} />
              <div class="symbol">{this.symbol}</div>
            </div>
          </div>
          <div>
            <div>Interest</div>
            <div class="input-container">
              <input id="interest" type="number" step="any" disabled={this.checked === 'interest'} value={this.interest} />
              <div class="symbol">%</div>
            </div>
          </div>
          <div>
            <div>Duration</div>
            <div class="input-container">
              <input id="duration" type="number" step="any" disabled={this.checked === 'duration'} value={this.duration} />
              <div class="symbol">Y</div>
            </div>
          </div>
          <div>
            <div>Final Amount</div>
            <div class="input-container">
              <input id="finalAmount" type="number" step="any" disabled={this.checked === 'finalAmount'} value={this.finalAmount} />
              <div class="symbol">{this.symbol}</div>
            </div>
          </div>
        </div>
        <div class="submit">
          <button type="submit">Calculate</button>
        </div>
      </form>,
    ];
  }
}
