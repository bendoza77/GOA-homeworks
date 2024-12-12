from weapons import iron_sword
from health_bar import Healthbar

class Character:

    def __init__(self, name: str, health: int) -> None:
        self.name = name
        self.health = health
        self.health_max = health 
        self.weapon = iron_sword
        self.health_bar = Healthbar(self) 

    def attack(self, target) -> None:
        target.health -= self.weapon.damage
        target.health = max(target.health, 0)
        target.health_bar.update()  
        print(f"{self.name} dealt {self.weapon.damage} to {target.name} with {self.weapon.name}")


class Hero(Character):

    def __init__(self, name: str, health: int) -> None:
        super().__init__(name, health)
        self.default_weapon = self.weapon
        self.health_bar = Healthbar(self, color="green") 

    def equip(self, weapon) -> None:  
        self.weapon = weapon
        print(f"{self.name} equipped the {self.weapon.name}")

    def drop(self) -> None:
        self.weapon = self.default_weapon

class Enemy(Character):

    def __init__(self, name: str, health: int, weapon) -> None:
        super().__init__(name, health) 
        self.weapon = weapon
        self.health_bar = Healthbar(self, color="red")