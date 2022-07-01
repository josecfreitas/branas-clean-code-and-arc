import { validateCPF } from "../src/validate-cpf";

describe("validate cpf", () => {
  describe("should successfuly validate a valid CPF", () => {
    it("verifying digit not equals to 00", () => {
      const cpf = "826.094.530-43";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(true);
    });

    it("1st verifying digit 0", () => {
      const cpf = "111.222.332-05";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(true);
    });

    it("2nd verifying digit 0", () => {
      const cpf = "125.241.290-80";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(true);
    });
  });

  describe("should not validate an invalid CPF", () => {
    it("invalid verifying number", () => {
      const cpf = "826.094.530-00";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(false);
    });

    it("not only numbers", () => {
      const cpf = "826.094.ABC-43";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(false);
    });

    it("all equal numbers", () => {
      const cpf = "777.777.777-77";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(false);
    });

    it("null", () => {
      const cpf = null as unknown as string;
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(false);
    });

    it("undefined", () => {
      const cpf = undefined as unknown as string;
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(false);
    });

    it("blank", () => {
      const cpf = "";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(false);
    });

    it("wrong length", () => {
      const cpf = "123456789";
      const isValidCPF = validateCPF(cpf);
      expect(isValidCPF).toStrictEqual(false);
    });
  });
});
