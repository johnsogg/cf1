class Animal:
    def __init__(self, name):
        # _name is "protected" by convention
        self._name = name
        # __mood is name-mangled (pseudo-private)
        self.__mood = "neutral"

    def speak(self):
        return f"{self._name} makes a sound."

    def mood(self):
        return self.__mood

    def set_mood(self, new_mood):
        self.__mood = new_mood


class Dog(Animal):
    def speak(self):  # override Animal.speak
        return f"{self._name} says: Woof!"

    def fetch(self, item):
        return f"{self._name} fetches the {item}."


class Cat(Animal):
    def speak(self):  # override Animal.speak
        return f"{self._name} says: Meow!"

    def scratch(self):
        return f"{self._name} scratches curtain."


fido = Dog("Fido")
fluffy = Cat("Fluffy")
mr_jiggles = Cat("Mr. Jiggles")
print(fido.speak())
print(fluffy.speak())
print(mr_jiggles.speak())
