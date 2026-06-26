def add_to_nine(val):
    return val + 9


def add_two_numbers(num_a, num_b):
    return num_a, num_b


recipe = {}


def add_spice(recipe):
    recipe["oregano"] = 6
    recipe["coriander"] = 9


def spice_it_up(recipe, oregano=6, coriander=9):
    recipe["oregano"] = oregano
    recipe["coriander"] = coriander


def any_order_spice(
    recipe,
    *,
    oregano=6,
    coriander=9,
    salt,
    pepper,
):
    recipe["oregano"] = oregano
    recipe["coriander"] = coriander


any_order_spice(recipe, coriander=10)

print("1", recipe)
any_order_spice(recipe)
print("2", recipe)
any_order_spice(recipe, coriander=10, oregano=3)
print("3", recipe)
