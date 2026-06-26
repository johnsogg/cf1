# fmt: line-length=50

# This is a comment because it starts with a hash
# sign.

print("Hello World! Print text to the console")
print("with the print function.")
print()

# Let's get some input from the user and assign it
# into a variable called ans.
print("Collect input with the input function.")
# Lists
numbers = []
numbers.append(
    input("Give me the first number in a list. ")
)
print("You provided " + numbers[0])
numbers.append(input("Give me another! "))
numbers.append(input("And another! "))
numbers.append(input("Ok this is the last one. "))

print(
    f"\nnumbers is actually a list of strings: "
    f"{numbers}"
)

# You might notice that when this prints out,
# it has quotes around each number. Which tells
# you something: they aren't numbers! Python got
# your input and had no idea that it was numeric.
# We could have typed in any value, like Hello or
# 🦑 which aren't numbers. So it treats all input
# as strings. If you want to conver to numbers,
# use int(s).

# Convert a single string to an integer.
# Convert the first item of numbers
first_number = int(numbers[0])
# Now, first_number is an integer. Which means
# if we want a string version of it we need to
# use str(first_number).
print("The first number is " + str(first_number))

# You can also convert a list of strings to
# numbers using a comprehension.
actual_numbers = [int(s) for s in numbers]

print("Number list is...")
print(actual_numbers)
print("Done.")


# You can define functions wherever you want, but
# you can only call them after they're defined.
#
# Here is function definition:


def summarize_numbers(nums):
    """
    summarize_numbers is a function that takes a
    list of numbers and reports the min, max, and
    mean, and returns the sum of the numbers.
    """
    total = sum(nums)
    count = len(nums)
    mean = total / count
    print(f"Min: {min(nums)}")
    print(f"Max: {max(nums)}")
    print(f"Mean: {mean}")
    return total


# With a function definition, you can invoke it.
# This one takes a list of numbers as input, which
# we happen to have from our user inputs.

summarize_numbers(actual_numbers)

# When I wrote this, I used 'numbers' instead of
# 'actual_numbers' and encountered a bug. See if
# you can recreate that. Do you understand why it
# was a bug?
#
# The reason was that 'numbers' is a badly named
# variable, which is a list of strings!
