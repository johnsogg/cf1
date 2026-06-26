class Animal {
  #mood = "neutral";

  constructor(name) {
    this._name = name;
  }

  speak() {
    return `${this._name} makes a sound.`;
  }

  mood() {
    return this.#mood;
  }

  setMood(newMood) {
    this.#mood = newMood;
  }
}

class Dog extends Animal {
  speak() {
    // override
    return `${this._name} says: Woof!`;
  }

  fetch(item) {
    return `${this._name} fetches the ${item}.`;
  }
}

class Cat extends Animal {
  speak() {
    // override
    return `${this._name} says: Meow!`;
  }

  scratch() {
    return `${this._name} scratches the furniture.`;
  }
}
