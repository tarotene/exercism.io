// Modified ver. of https://exercism.org/tracks/typescript/exercises/rna-transcription/solutions/joebutler2
type Nucleotide = "G" | "C" | "A" | "T";
class Transcriptor {
  translationMap: { [Nucleotide: string]: string } = {
    C: "G",
    G: "C",
    A: "U",
    T: "A",
  };

  private translateNucleotide = (input: string): string =>
    this.translationMap[input as Nucleotide] || this.raiseError();

  private raiseError = () => {
    throw new Error("Invalid input DNA.");
  };

  toRna = (input: string): string =>
    input.split("").map(this.translateNucleotide).join("");
}

const transcriptor = new Transcriptor();
export const toRna = transcriptor.toRna;
