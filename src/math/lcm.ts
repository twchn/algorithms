import gcd from './gcd';

// least common multiple
function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

export default lcm;
