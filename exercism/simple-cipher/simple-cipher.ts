const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

class SimpleCipher {
  alphabet: string = alphabet;
  key: string;

  constructor(key: any = alphabet) {
    if (!key || key !== key.toLocaleLowerCase() || !isNaN(key))
      throw new Error("Bad key");
    this.key = key;
  }

  replaceChar(char: string, index: number, isEncode: boolean = true): string {
    const alphabetList: string[] = this.alphabet.split("");
    const keyList: string[] = this.key.split("");
    const orignalIndex: number = alphabetList.indexOf(char);
    let targetIndex: number;

    const stepSize: number = alphabetList.indexOf(
      keyList[index % keyList.length]
    );

    if (isEncode) {
      targetIndex =
        orignalIndex + stepSize > alphabetList.length - 1
          ? orignalIndex + stepSize - alphabetList.length
          : orignalIndex + stepSize;
    } else {
      targetIndex =
        orignalIndex - stepSize < 0
          ? alphabetList.length + orignalIndex - stepSize
          : orignalIndex - stepSize;
    }

    return alphabetList[targetIndex];
  }

  encode(info: string): string {
    const result: string[] = info
      .split("")
      .map((char, index) => this.replaceChar(char, index));
    return result.join("");
  }

  decode(info: string): string {
    const result: string[] = info
      .split("")
      .map((char, index) => this.replaceChar(char, index, false));
    return result.join("");
  }
}

export default SimpleCipher;
