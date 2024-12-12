import os

os.system("") 

class Healthbar:

    symbol_remaining: str = "="  
    symbol_lost: str = "_"

    barrier: str = "|"
    colors: dict = {"red": "\033[91m",
                   "purple": "\033[95m",
                   "blue": "\033[34m",
                   "blue2": "\033[36m",
                   "blue3": "\033[96m",
                   "green": "\033[92m",
                   "green2": "\033[32m",
                   "brown": "\033[33m",
                   "yellow": "\033[93m",
                   "grey": "\033[37m",
                   "default": "\033[0m"
                   }
    
    def __init__(self,
                 entity,
                 length: int = 20,
                 is_colored: bool = True,
                 color: str = "default") -> None:  
        self.entity = entity
        self.length = length
        self.max_value = entity.health_max
        self.current_value = entity.health

        self.is_colored = is_colored
        self.color = self.colors.get(color, self.colors["default"])

    def update(self) -> None:
        self.current_value = self.entity.health

    def draw(self) -> None:
        remaining_bar = round(self.current_value / self.max_value * self.length)
        lost_bars = self.length - remaining_bar
        
      
        print(f"{self.entity.name}'s HEALTH: {self.entity.health}/{self.entity.health_max}")
        

        health_bar = (
            f"{self.barrier}"
            f"{self.color if self.is_colored else ''}"
            f"{self.symbol_remaining * remaining_bar}"  
            f"{self.symbol_lost * lost_bars}"  
            f"{self.colors['default'] if self.is_colored else ''}"
            f"{self.barrier}"
        )
        print(health_bar)