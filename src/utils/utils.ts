export function calcPrincipal(interest: number, duration: number, endAmount: number, interval = 1): number {
  const i = interest / 100;
  const principal = endAmount / Math.pow(1 + i / interval, duration * interval);
  return +principal.toFixed(2);
}

export function calcInterest(startAmount: number, duration: number, endAmount: number, interval = 1): number {
  const interest = interval * (Math.pow(endAmount / startAmount, 1 / (interval * duration)) - 1);
  return +(interest * 100).toFixed(2);
}

export function calcDuration(startAmount: number, interest: number, endAmount: number, interval = 1): number {
  const i = interest / 100;
  const duration = Math.log(endAmount / startAmount) / (interval * Math.log(1 + i / interval));
  return +duration.toFixed(2);
}

export function calcFinalAmount(startAmount: number, interest: number, duration: number, interval = 1): number {
  const i = interest / 100;
  const endAmount = startAmount * Math.pow(1 + i / interval, interval * duration);
  return +endAmount.toFixed(2);
}
