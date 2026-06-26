def fibonacci(n):
    """
    fibonacci is a function that takes an integer
    n and returns the nth fibonacci number.
    """
    if n <= 0:
        # stop if n is 0 or negative, return 0
        return 0
    elif n == 1:
        # stop if n is 1 and return 1
        return 1
    else:
        # recurse: return sum of two previous vals
        return fibonacci(n - 1) + fibonacci(n - 2)


fib9 = fibonacci(9)
print("Fibonacci number 9")
print(fib9)  # Prints 34

# Extra practice: see if you can modify this to
# take user input. You need to convert it to an
# integer, and then invoke the fibonacci function
# using that integer.
