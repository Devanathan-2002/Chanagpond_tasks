import os

def Square(num):
    print("Square Pid:",os.getpid())
    print("Square of the Number:",num**2)

def Cube(num):
    print("Square Pid:",os.getpid())
    print("Cube of the Number:",num**3)

def main():
    print("Square Pid:",os.getpid())
    Square(5)
    Cube(5)

if __name__=="__main__":
    print("Square Pid:",os.getpid())
    main()
