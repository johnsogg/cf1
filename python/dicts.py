# Dictionary cheatsheet

# Define with curlies on the outside, and then a
# comma-separated list of key: value pairs inside

d = {
    "name": "Alice",
    "age": 30,
    "is_student": False,
    "courses": ["math", "science"],
    42: "the answer",  # keys can be numbers too
}

# get the value for a key. errors if key missing
d["name"]  # "Alice"
# safe access (returns default if key missing)
d.get("name", "Unknown Name")

# 2. Add / Update

d["name"] = "Bob"  # add new or overwrite existing

# 3. Remove

del d["name"]  # remove key (error if missing)
d.pop(
    "name", "Default Name"
)  # safe remove/return
d.clear()  # remove everything

# re-establish d like it was earlier cuz
# since we just cleared it out.
d = {
    "name": "Alice",
    "age": 30,
    "is_student": False,
    "courses": ["math", "science"],
    42: "the answer",  # keys can be numbers too
}

# 4. Inspect

len(d)
is_name_there = "name" in d
is_dob_there = "dob" in d
print("is_name_there:", is_name_there)  # True
print("is_dob_there:", is_dob_there)  # False

# 5. Iterate

print("\nKeys:")
for k in d:  # iterate keys
    print(k)

print("\nValues:")
for v in d.values():  # iterate values
    print(v)

print("\nPairs:")
for k, v in d.items():  # iterate pairs
    print(k, "==", v)

# 6. Copying

my_new_thing = d.copy()
my_new_thing = dict(d)

# 7. Built-in functions that work

# len(d)

sorted(d) # list of sorted keys
list(d)   # list of keys from dictionary
sum(d.values()) # (if numeric)
