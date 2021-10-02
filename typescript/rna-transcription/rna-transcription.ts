export function toRna(dnaString: string): string {
  let rnaString: string = "";
  for (let dna of dnaString) {
    switch (dna) {
      case "G":
        rnaString += "C";
        break;
      case "C":
        rnaString += "G";
        break;
      case "T":
        rnaString += "A";
        break;
      case "A":
        rnaString += "U";
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }
  return rnaString;
}