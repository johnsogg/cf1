# Variables can change types!
x = 42  # integer
x = 3.14  # floating point
x = True  # boolean true
x = False  # boolean false
x = None  # in JS this is null
x = "hello"  # string
x = "hello"
x = """multi
line"""
x = """also multi
line"""

x = [1, 2, 3]  # list
x = (1, 2, 3)  # tuple
x = {1, 2, 3}  # set
x = {"a": 1, "b": 2}  # dict

# ----------------------------------- Lists

# Prints 1 2 3 over three lines
for item in [1, 2, 3]:
    print(item)

# Prints howdy over five lines
for char in "howdy":
    print(char)

# You can still get the index using the enumerate
# function on your list, in case you need it.
for i, char in enumerate("howdy"):
    print(f"At position {i} is character {char}")

# --------------------------------- Format Strings

# Notice the weird f"blah {i} blah" string? This
# is a format string. Syntax is same as a normal
# string but with an f in front, and then you can
# put variables in curlies and it will evaluate
# them for printing. Behold:

print(f"Most recent x is: {x}")

# ----------------------------------- Ranges

# You can get ranges to iterate over like this:

shtuff = range(5)
print("shtuff:")
print(shtuff)

# More common way of doing this is to build the
# range in the for-loop, like this.
for v in range(5):
    print(f"Next element of range(5): {v}")

# You can also set the lower and upper bounds.
# Notice how it doesn't reach 8! It includes
# the lower number, but not the upper.

for v in range(4, 8):
    print(f"Element in range 4 to 8: {v}")

# You can also tell it how much to skip as it
# goes from lower to upper:

for v in range(1, 13, 3):
    print(f"Range 1 to 13 skip by 3: {v}")

# 'lower' and 'upper' is a dirty lie. You can go
# backwards as well with a negative skip:

for v in range(5, 0, -1):
    print(f"Countdown: {v}")

# ----------------------------------- Dictionaries

beatles = {
    "rhythm": "John",
    "bass": "Paul",
    "lead": "George",
    "drums": "Ringo",
}

# You can iterate over just the values:

for v in beatles.values():
    print(f"Value: {v}")

# Or the keys:

for k in beatles.keys():
    print(f"Key: {k}")

# Or the key/value pairs using beatles.items()

for role, name in beatles.items():
    print(f"Role: {role} - Name: {name}")

# ----------------------------------- While Loops

# You can also use while loops like in JS:

x = 10
while x > 0:
    print(f"Current value of x: {x}")
    x = x - 3  # 10, 7, 4, 1


x = 2
y = 4
z = 8

answer = x + y  # add
answer = x - y  # subtract
answer = x * y  # multipy
answer = x / y  # divide
answer = x % y  # modulo
answer = x**y  # exponentiate


INTENDED_TO_BE_CONSTANT = 3.14519
# Don't make it weird. Don't do this:
INTENDED_TO_BE_CONSTANT = "Something else"
