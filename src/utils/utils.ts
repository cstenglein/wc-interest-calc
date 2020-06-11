export function calcPrincipal(interest: number, duration: number, endAmount: number): number {
  // TODO: option to calculate interest which is e.g. compounded monthly:
  // endAmount / Math.pow(1 + i / 12, duration * 12);
  const i = interest / 100;
  const principal = endAmount / Math.pow(1 + i, duration);
  return +principal.toFixed(2);
}

export function calcInterest(startAmount: number, duration: number, endAmount: number): number {
  // TODO: option to calculate interest which is e.g. compounded monthly:
  // 12 * (Math.pow(endAmount / startAmount, 1 / (12 * duration)) - 1);
  const interest = Math.pow(endAmount / startAmount, 1 / duration) - 1;
  return +(interest * 100).toFixed(2);
}

export function calcDuration(startAmount: number, interest: number, endAmount: number): number {
  // TODO: option to calculate interest which is e.g. compounded monthly:
  // Math.log(endAmount / startAmount) / 12 * Math.log(1 + i / 12);
  const i = interest / 100;
  const duration = Math.log(endAmount / startAmount) / Math.log(1 + i);
  return +duration.toFixed(2);
}

export function calcFinalAmount(startAmount: number, interest: number, duration: number): number {
  // TODO: option to calculate interest which is e.g. compounded monthly:
  // startAmount * Math.pow(1 + i/12, duration*12);
  const i = interest / 100;
  const endAmount = startAmount * Math.pow(1 + i, duration);
  return +endAmount.toFixed(2);
}
