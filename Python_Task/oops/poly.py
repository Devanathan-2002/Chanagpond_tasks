class Transport:
    def __init__(self,brand,model):
        self.brand=brand
        self.model=model
    def display(self):
        print(f'{self.brand} and {self.model}')

class Car(Transport):
    pass