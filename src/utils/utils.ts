export function calcStartAmount(): string {
  return '0';
}

export function calcInterest(): string {
  return '0';
}

export function calcDuration(): string {
  return '0';
}

export function calcEndAmount(startAmount: number, interest: number, duration: number): string {
  let endAmount = startAmount;
  for (let i = 0; i < duration; i++) {
    endAmount += endAmount * (interest / 100);
  }

  return endAmount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
