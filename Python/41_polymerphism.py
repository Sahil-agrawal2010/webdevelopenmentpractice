class Shape:
    def area(self):
        pass
    
class Circle(Shape):
    def __init__(self, radious):
        self.radious=radious
        
    def area(self):
        return 3.1415 * self.radious**2
    
class Triangle(Shape):
    def __init__(self, base, height):
        self.base=base
        self.height=height
        
    def area(self):
        return 1/2 * self.base * self.height
    
class Pizza(Circle):
    def __init__(self, topping, radious):
        self.topping=topping
        super().__init__(radious)
        
shapes=[Circle(14), Triangle(5,10), Pizza("Cheeze",14)]

for shape in shapes:
    print(f"{shape.area():.2f} cm2")