export function validateCPF(maskedCPF: string): boolean {
  if (!maskedCPF) return false;

  const cpf = removeNonNumbersCharacteres(maskedCPF);
  if (cpf.length !== 11) return false;

  const cpfDigits = cpf.split("").map((char) => parseInt(char));
  if (areAllDigitsTheSame(cpfDigits)) return false;

  const verifyingDigit1 = calculateVerifyingDigit(cpfDigits.slice(0, 9));
  if (verifyingDigit1 !== cpfDigits.slice(-2)[0]) return false;

  const verifyingDigit2 = calculateVerifyingDigit(cpfDigits.slice(0, 10));
  if (verifyingDigit2 !== cpfDigits.slice(-1)[0]) return false;

  return true
}

function removeNonNumbersCharacteres(cpf: string) {
  return cpf.replace(/[^\d]/g, "");
}

function areAllDigitsTheSame(cpfDigits: number[]) {
  return cpfDigits.every((digit) => digit === cpfDigits[0]);
}

function calculateVerifyingDigit(cpfDigits: number[]): number {
  const remainder = calculateVerifyingDigitsSum(cpfDigits) % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

function calculateVerifyingDigitsSum(cpfDigits: number[]): number {
  const multiplier = cpfDigits.length + 1;
  return cpfDigits.reduce(
    (sum, cpfDigit, index) => sum + cpfDigit * (multiplier - index),
    0
  );
}
