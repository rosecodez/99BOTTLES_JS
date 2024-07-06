import { downTo } from "./helpers";
import { capitalize } from "./helpers";

// 1.personal solution -> shameless green

export class Bottles {
  verse(number) {
    if (number > 2) {
      return (
        number +
        " bottles of milk on the wall, " +
        number +
        " bottles of milk.\n" +
        "Take one down and pass it around, " +
        (number - 1) +
        " bottles of milk on the wall.\n"
      );
    } else if (number === 2) {
      return (
        number +
        " bottles of milk on the wall, " +
        number +
        " bottles of milk.\n" +
        "Take one down and pass it around, " +
        (number - 1) +
        " bottle of milk on the wall.\n"
      );
    } else if (number === 1) {
      return (
        number +
        " bottle of milk on the wall, " +
        number +
        " bottle of milk.\n" +
        "Take it down and pass it around, " +
        "no more bottles of milk on the wall.\n"
      );
    } else if (number === 0) {
      return (
        "No more bottles of milk on the wall, " +
        "no more bottles of milk.\n" +
        "Go to the store and buy some more, " +
        "99 bottles of milk on the wall.\n"
      );
    }
  }
  verses(number, number2) {
    if (number > 2 && number2 > 2) {
      return (
        number +
        " bottles of milk on the wall, " +
        number +
        " bottles of milk.\n" +
        "Take one down and pass it around, " +
        (number - 1) +
        " bottles of milk on the wall.\n" +
        "\n" +
        number2 +
        " bottles of milk on the wall, " +
        number2 +
        " bottles of milk.\n" +
        "Take one down and pass it around, " +
        (number2 - 1) +
        " bottles of milk on the wall.\n"
      );
    } else if (number === 2) {
      return (
        number +
        " bottles of milk on the wall, " +
        number +
        " bottles of milk.\n" +
        "Take one down and pass it around, " +
        (number - 1) +
        " bottle of milk on the wall.\n" +
        "\n" +
        (number - 1) +
        " bottle of milk on the wall, " +
        (number - 1) +
        " bottle of milk.\n" +
        "Take it down and pass it around, " +
        "no more bottles of milk on the wall.\n" +
        "\n" +
        "No more bottles of milk on the wall, " +
        "no more bottles of milk.\n" +
        "Go to the store and buy some more, " +
        "99 bottles of milk on the wall.\n"
      );
    }
  }
  song() {
    let song = "";
    for (let i = 99; i >= 0; i--) {
      song += this.verse(i);
      /* adding a break line after each verse
            if the current number of bottles i is not equal to 0
      */
      if (i !== 0) {
        song += "\n";
      }
    }
    // return song with all the verses
    return song;
  }
}

// 2. after refactoring, author changes code after receiving a new feature of adding six-pack bottles
export class Bottles {
  song() {
    return this.verses(99, 0);
  }
  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
  }
  verse(number) {
    return (
      `${capitalize(this.quantity(number))} ` +
      `${this.container(number)} ` +
      "of milk on the wall, " +
      `${this.quantity(number)} ` +
      `${this.container(number)} ` +
      "of milk.\n" +
      `${this.action(number)}, ` +
      `${this.quantity(this.successor(number))} ` +
      `${this.container(this.successor(number))} ` +
      "of milk on the wall.\n"
    );
  }
  quantity(number) {
    if (number === 0) {
      return "no more";
    } else {
      return number.toString();
    }
  }
  container(number) {
    if (number === 1) {
      return "bottle";
    } else {
      return "bottles";
    }
  }
  action(number) {
    if (number === 0) {
      return "Go to the store and buy some more";
    } else {
      return `Take ${this.pronoun(number)} down and pass it around`;
    }
  }
  pronoun(number) {
    if (number === 1) {
      return "it";
    } else {
      return "one";
    }
  }
  successor(number) {
    if (number === 0) {
      return 99;
    } else {
      return number - 1;
    }
  }
}
