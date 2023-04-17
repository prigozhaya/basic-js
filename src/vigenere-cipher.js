const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(x) {
    this.type = x === false ? "revers" : "direct";
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let code = "";
    let simbolsWithoutSpace = 0;
    for (let i in text) {
      if (alphabet.includes(text[i].toUpperCase())) {
        let simbol =
          (alphabet.indexOf(text[i].toUpperCase()) +
            alphabet.indexOf(
              key[simbolsWithoutSpace % key.length].toUpperCase()
            )) %
          alphabet.length;
        code += alphabet[simbol];
        simbolsWithoutSpace++;
      } else {
        code += text[i].toUpperCase();
      }
    }
    return this.type === "revers" ? code.split("").reverse().join("") : code;
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let code = "";
    let simbolsWithoutSpace = 0;
    for (let i in text) {
      if (alphabet.includes(text[i].toUpperCase())) {
        let simbol =
          (alphabet.indexOf(text[i].toUpperCase()) -
            alphabet.indexOf(
              key[simbolsWithoutSpace % key.length].toUpperCase()
            ) +
            alphabet.length) %
          alphabet.length;
        code += alphabet[simbol];
        simbolsWithoutSpace++;
      } else {
        code += text[i].toUpperCase();
      }
    }
    return this.type === "revers" ? code.split("").reverse().join("") : code;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
