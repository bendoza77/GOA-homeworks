from character import Hero,Enemy
from weapons import short_bow,iron_sword
import os


hero = Hero(name="gabriel", health=10000)
hero.equip(iron_sword)
enemy = Enemy(name="luka", health=10000, weapon=short_bow)

while True:
    os.system("cls")
    hero.attack(enemy)
    enemy.attack(hero)

    hero.health_bar.draw()
    enemy.health_bar.draw()

    

    input()