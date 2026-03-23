# Super is a function used in a child class to call methods from parent class
class Shape:
    def __init__(self, color, isFillied):
        self.color=color
        self.isFillied=isFillied
        
    def test(self):
        print(f"My color is {self.color} and I am {"Fillied" if self.isFillied else "Not fillied."}")
        
class Circle(Shape):
    def __init__(self, radious, color, isFillied):
        self.radious=radious
        super().__init__(color,isFillied)
        
    def test(self):
        print(f"I am circle and my area is {3.1415 * self.radious * self.radious}")
        super().test()
        
class Rectangle(Shape):
    def __init__(self, length, breadth, color, isFillied):
        super().__init__(color, isFillied)
        self.length=length
        self.breadth=breadth
        
    def test(self):
        print(f"I am rectanglr and my area is {self.length * self.breadth}")
        super().test()
        
        
        
obj_circle=Circle(7,"Red",True)
obj_rectangle=Rectangle(2,3,"Blue",False)
obj_circle.test()
obj_rectangle.test()