# CLACULATE THE AREA OF CIRLCE

# class circle:
#     pi=3.14
#     def __init__(self):
#         self.radius=0
#     def Accept(self):
#         self.radius= float(input('Enter the input: '))
#         return self.Area_of_the_circle()

#     def Area_of_the_circle(self):
#         return f'The area of the circle is: {(circle.pi*self.radius)**2}'
    
# def main():
#     exe=circle()
#     print(exe.Accept())
# main()


# __________________________________________________________________________________________

# class simple_calc:
#     def __init__(self):
#         self.data=[]
#         self.size=0
#     def get_input(self):
#         self.size=int(input('Enter the size of the array: '))
#         print('Enter the data here')
#         for _ in range(self.size):
#             dataum=int(input('Enter the data: '))    
#             self.data.append(dataum)
#         self.get_choice()
#     def get_choice(self):
#         print('1.Add\n2.max\n3.min\n4.exit')
#         choice=int(input('Enter the choice: '))
#         if choice==1:
#             print()
#             print(self.Addition())
#             return self.get_choice()
#         elif choice==2:
#             print()
#             print(self.Maximum())
#             return self.get_choice()
#         elif choice==3:
#             print()
#             print(self.Minimum())
#             return self.get_choice()
#         elif choice==4:
#             print('Thank you')
#             return 
#         else:
#             print('your choice is invalid')
#     def Addition(self):
#         totol=0
#         for data in self.data:
#             totol+=data
#         return f'sum: {totol}' 
#     def Maximum(self):
#         maxi=self.data[0]
#         for i in self.data:
#             if i>maxi:
#                 maxi=i
#         return f'maximum: {maxi}'
#     def Minimum(self):
#         mini=self.data[0]
#         for i in self.data:
#             if i<mini:
#                 mini=i
#         return f'Minimum: {mini}'

# def main():
#     exe=simple_calc()
#     exe.get_input()
# if __name__=='__main__':
#     main()
# _______________________________________________________________________________________________________


# class Menu_items:
#     def __init__(self):
#         self.items=['poori','Dosa','Chapathi','Idly','Biriyani']
    
#     def display_items(self):
#         return self.items
#     def add_items(self):
#         user=input('Enter the item to add: ')
#         if user not in self.items:
#             self.items.append(user)
#         else:
#             return 'Item already present'
#         return self.items
#     def remove_items(self):
#         print(self.items)
#         user=input('Enter the item to remove: ')
#         if user not in self.items:
#             return 'Item not present'
#         else:
#             self.items.remove(user)
#         return self.items
#     def update_item(self):
#         print(self.items)
#         user_value=input('Enter the item to update: ')
        
#         if user_value not in self.items:
#             return 'Item not present'
#         else:
#             user_value_up=input('Enter the item: ')
#             self.items[self.items.index(user_value)]=user_value_up
#         return self.items
    
# def main():
#     exe=Menu_items()
#     print('1.Display items\n2.Add_items\n3.Update_item\n4.Delete_item')
#     user_choice=input('Enter your choice:')
#     if user_choice=='1':
#         print()
#         print('Menu Items:')
#         for item in exe.display_items():
#             print(item)
#     elif user_choice=='2':
#         print(exe.add_items())
#     elif user_choice=='3':
#         print(exe.update_item())
#     elif user_choice=='4':
#         print(exe.remove_items())
#     else:
#         print('Please enter the valid option....')
# if __name__=="__main__":
#     main()
# _______________________________________________________________________________________________________


# class Bank:
#     def __init__(self):
#         self.main_balance=10000
#     def with_draw(self):
#         W_amount=int(input('Enter the amount to withdraw: '))
#         self.main_balance-=W_amount
#         return f'The amount with drawn: {W_amount} main balance is: {self.main_balance}'
#     def available_amount(self):
#         return f'The available amount is {self.main_balance}'
#     def Deposit_amount(self):
#         amount=int(input('Enter the amount to deposit: '))
#         self.main_balance+=amount
#         return f'The available balance is: {self.main_balance}'

# def main():
#     exe=Bank()
#     print('1.withdraw\n2.available amount\n3.deposit amount')
#     user_input=int(input('Enter the choice: '))

#     if user_input==1:
#         print(exe.with_draw())
#     elif user_input==2:
#         print(exe.available_amount())
#     elif user_input==3:
#         print(exe.Deposit_amount())
#     else:
#         print('Invalid choice...')

# if __name__=='__main__':
#     main()
# _______________________________________________________________________________________________________

# CALCULATOR


# def add(num1,num2):
#     return f'Addition: {num1+num2}'
# def sub(num1,num2):
#     return f'Subtraction: {num1-num2}'
# def mul(num1,num2):
#     return f'Multiplication: {num1*num2}'
# def div(num1,num2):
#     return f'Division: {num1/num2}'





# def main():
#     print('1.+','2.-','3./','4.*',sep='\n')
#     value=int(input('Enter the choice: '))
#     value_1=int(input('Enter the value1: '))
#     value_2=int(input('Enter the value2: '))
#     opera={1:add,2:sub,3:div,4:mul}
#     if value==1:
#         print(opera[1](value_1,value_2))
#     elif value==2:
#         print(opera[2](value_1,value_2))
#     elif value==3:
#         print(opera[3](value_1,value_2))
#     elif value==4:
#         print(opera[4](value_1,value_2))
# main()
# _______________________________________________________________________________________________________


n=4
final=1
def fact(n):
    global final
    if n==1:
        return final
    else:
        print(final)
        final*=n
        return fact(n-1)
print(fact(n))
