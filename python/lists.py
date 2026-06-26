import random

colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "black",
    "white",
]
# print a random color from colors list
print(random.choice(colors))


# fmt: off
import traceback

x = 123.45 # example variable for later

# Lists can contain different kinds of things.

my_list = [
    "Geneva",              # strings
    42,                    # numeric types
    False,                 # booleans
    ["another", "list"],   # nested list literal
    {"a_key": "a_value"},  # dictionary literal
    None,                  # not-a-value value
    x,                     # any variable
]

print(my_list)

# you can add to a list with append

my_list.append("New item")
print(my_list)

# remove last item with pop

my_list.pop()
print(my_list)

# remove specific item with remove

my_list.remove("Geneva")
my_list.remove(False)
print(my_list)

# what happens if the item is not found?

try:
    my_list.remove("Not in list")
except ValueError as e:
    print("Item not found:", e)
    # show stack trace for exception
    traceback.print_exc()

# remove at specific index with del

del my_list[0]
print(my_list)

# access items by index

print(my_list[0])  # first item
print(my_list[-1]) # last item

# get length of list

print(len(my_list))

# access nested list indexes
nested_list = my_list[0]  # ["another", "list"]
print(nested_list)
print(my_list[0][1])  # "list"

# Avoid index out of range errors with try/catch


try:
    print(my_list[10])
except IndexError:
    print("Index 10 out of range")



# functions that work on lists
# sum, min, max, sorted, reversed
print("\n\nFunctions that work on lists:")
numbers = [5, 3, 8, 1, 2]
print(numbers)             # original list
print(sum(numbers))        # sum of numbers (19)
print(min(numbers))        # minimum number (1)
print(max(numbers))        # maximum number (8)
print(sorted(numbers))     # sorted 1,2,3,5,8
print(list(reversed(numbers))) # reverse 2,1,8,3,5

# Practice:
# See if you can make a reversed sorted list

# Use len() on other collections
# Dictionary - use curlies
len({"a": 1, "b": 2})  # 2
# Set - also uses curlies
len({"a", "b", "c"})   # 3
# Tuple - uses parens
len((1, 2, 3, 4))      # 4
