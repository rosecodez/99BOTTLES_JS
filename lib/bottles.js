import { downTo } from "./helpers";
import { capitalize } from "./helpers";

// 1.personal solution -> shameless green
/*
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
      // adding a break line after each verse
      //    if the current number of bottles i is not equal to 0
      //
      if (i !== 0) {
        song += "\n";
      }
    }
    // return song with all the verses
    return song;
  }
}
/*

// 2. after refactoring, author changes code after receiving a new feature of adding six-pack bottles //

// 2.1 refactor Bottles class
/*export class Bottles {
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
*/

/* export class Bottles {
  song() {
    return this.verses(99, 0);
  }
  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
  }
  verse(number) {
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());
    return (
      `${capitalize(bottleNumber.quantity())} ` +
      `${bottleNumber.container()} ` +
      "of milk on the wall, " +
      `${bottleNumber.quantity()} ` +
      `${bottleNumber.container()} ` +
      "of milk.\n" +
      `${bottleNumber.action()}, ` +
      `${nextBottleNumber.quantity()} ` +
      `${nextBottleNumber.container()} ` +
      "of milk on the wall.\n"
    );
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  quantity() {
    if (this.number === 0) {
      return "no more";
    } else {
      return this.number.toString();
    }
  }

  container() {
    if (this.number === 1) {
      return "bottle";
    } else {
      return "bottles";
    }
  }

  action() {
    if (this.number === 0) {
      return "Go to the store and buy some more";
    } else {
      return `Take ${this.pronoun()} down and pass it around`;
    }
  }

  pronoun() {
    if (this.number === 1) {
      return "it";
    } else {
      return "one";
    }
  }
  successor() {
    if (this.number === 0) {
      return 99;
    } else {
      return this.number - 1;
    }
  }
}
*/
class Bottles {
  song() {
    return this.verses(99, 0);
  }
  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
  }
  verse(number) {
    const bottleNumber = BottleNumber.for(number);
    return (
      capitalize(`${bottleNumber} of milk on the wall, `) +
      `${bottleNumber} of milk.\n` +
      `${bottleNumber.action()}, ` +
      `${bottleNumber.successor()} of milk on the wall.\n`
    );
  }
}

class BottleNumber {
  static for(number) {
    let bottleNumberClass;
    switch (number) {
      case 0:
        bottleNumberClass = BottleNumber0;
        break;
      case 1:
        bottleNumberClass = BottleNumber1;
        break;
      default:
        bottleNumberClass = BottleNumber;
        break;
    }
    return new bottleNumberClass(number);
  }
  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
  quantity() {
    return this.number.toString();
  }
  container() {
    return "bottles";
  }
  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }
  pronoun() {
    return "one";
  }
  successor() {
    return BottleNumber.for(this.number - 1);
  }
}
class BottleNumber0 extends BottleNumber {
  quantity() {
    return "no more";
  }
  action() {
    return "Go to the store and buy some more";
  }
  successor() {
    return BottleNumber.for(99);
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return "bottle";
  }

  pronoun() {
    return "it";
  }
}
/*
Replace Conditional with Polymorphism

  1. Create a subclass to stand in for the value upon which you switch.
    a. Copy one method that switches on that value into the subclass.
    b. In the subclass, remove everything but the true branch of the conditional.
      i. At this point, create a factory if it does not yet exist, and
      ii. Add this subclass to the factory if not yet included.
    c. In the superclass, remove everything but the false branch of the conditional.
    d. Repeat steps a-c until all methods that switch on the value are dispersed.
  2. Iterate until a subclass exists for every different value upon which you switch.

*/
