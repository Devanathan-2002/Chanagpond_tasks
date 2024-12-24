statement_1='Good Afternoon' #single quotes
statement_2="Good Afternoon" #dpouble quotes
statement_3='''Good Morning have a good day'''# triple quotes

# for i,v in enumerate(statement_1):
#     print(f'index of {i} is {v}')


# using diffrent quotes in same statement

timing='it"s 12:10pm'

print('using diffrent quotes in same statement: ',timing)

# using same quotes in same statement

timing='it\'s 12:10pm'
print('using same quotes in same satatement: ',timing)


# formated string

name='deva'
age=20
print(name+" "+str(age)) #normal way to write the sentence
print(f'My name is {name} and my age is {age}') # it is used for formating the string that is if we add f in front of the statement we can use differeent data in curly braces


