# Function

# -- A fuunction is a block of code that performs aspecific task
# -- functions are reusable piceses of program
# -- they allow you to give a name to a block of statement allowing you to run that block using specified name anyware in your program and any number of times
# -- this is known as calling function
# -- the names given in the function definition are called parameters whereas the values you can supply in the function call are arguments
# -- you define a function with def keyword, then write identifier(name) folowed by prantheses and a    colon
# -- return used to exit froma function and go back to the function caller and return the specified value or data item to the caller

def demo():
    print('Inside Demo')

def Demo_01(Value):
    print('Inside Demo 01:',Value)

def Demo_02(value1,value2):
    print('Inside Demo 02:',value1,value2)
    print('Addition:',value1+value2)


def Demo_03(value1,value2):
    print('Inside Demo 03:',value1,value2)
    Add=value1+value2
    sub=value1-value2
    return Add,sub




def main():
    demo()
    print('-'*100) 
    Demo_01(100)
    print('-'*100)
    Demo_02(100,200)
    print('-'*100)
    print("Addition:",Demo_03(100,200)[0])
    print("Subtraction:",Demo_03(100,200)[1])

if __name__=="__main__":
    main()
