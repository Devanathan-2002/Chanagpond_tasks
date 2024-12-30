# -- map,fliter and redue are paradiagram of functional programing
# -- map and filter come built in with python (built-in function)
# -- reduse, needs to be imported as it resides in the function ModuleNotFoundError

# --Syntax
# filter(function,iterable)
# --function: it tests fi each element of a sequence true or not
# --sequence: which needs to be filtered it can be lists,sets, tuples or container of any iterators

# lambda function(anonymus function)->function without name 
# -- this function can take any number of argumnents but only one expresion which is ealuated and returned

# syntax:lambda argument:expression

# map() function returns map object (which is an iterator of the results) after applying the given function to each item of a given iterable(list,tuple etc) or allows you to process and transform al the item in an iterables without using an explicit for loop, a technique commonly known as mapping 
# syntax:
# map(function,iterable,[iterable1,iterable2....])

from functools import reduce
def CheckNumber(num):
    if(num>=70 and num<=90):
        return True
    return False
def IncrementNumber(num):
    return num+10
def addition(num1,num2):
    return num1+num2

def main():
    number=[78,90,40,79,100]
    print('Map function: ',tuple(map(IncrementNumber,number)))
    print('filter function: ',list(filter(CheckNumber,number)))
    print('reduce function: ',reduce(addition,number))
    reduce_result=reduce(lambda x,y:x+y,number)
    print('lambda reduce function: ',reduce_result)

if __name__=='__main__':
    main()

