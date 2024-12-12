class Weapon:
    def __init__(self,name: str,type: str,damage: int) -> None:
        self.name = name
        self.type = type
        self.damage = damage

iron_sword = Weapon(name="Iron", type="Sword", damage=200)

short_bow = Weapon(name="Bow", type="Short bow", damage=150)

fists = Weapon(name="fists", type="fists", damage=100)

