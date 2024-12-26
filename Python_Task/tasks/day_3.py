# def calculate_circle(Radius,pi=3.14):
#     return pi*Radius*Radius



# def main():
#     radius=int(input('Enter the value: '))
#     print('positional argument')
#     print(calculate_circle(radius,3))
#     print('First argument positional sec default')
#     print(calculate_circle(radius))
#     print('Keyword argument')
#     print(round(calculate_circle(Radius=radius,pi=3.14),1))
#     # print('first argument Keyword')
#     # print(calculate_circle(Radius=radius,pi=3.14))
#     print('first argument Keyword and sec default')
#     print(calculate_circle(Radius=radius))

# if __name__=='__main__':
#     main()


# menu_list=['Dosa','Chapathi','Poori','Porata','Biriyani']
# def display_item():
#     return(menu_list)
# def add_item():
#     print()
#     print('Avaibale Items:')
#     for item in display_item():
#         print(item)
#     Item_value=int(input('Enter the number items you want to add:'))
#     print('Enter the items one by one below:')
#     for  _ in range(Item_value):
#         user_input=input()
#         menu_list.append(user_input)
#     print(f'Menu items added successfully\nAvailable List')
#     for i in menu_list:
#         print(f'{menu_list.index(i)+1}.{i}')
# def update_item():
#     print('Available List:')
#     for item in menu_list:
#         print(item)
#     update_value=input('Which item You have to update: ')
#     if update_value in menu_list:
#         new_value=input('Enter the new item: ')
#         menu_list[menu_list.index(update_value)]=new_value
#         print()
#         return(f'Updated successfully!\nThe updated Menu list:\n{menu_list}')
#     else:
#         return 'Item not available'
# def delete_item():
#     Delete_value=input('Which item You have to Delete: ')
#     if Delete_value in menu_list:
#         menu_list.remove(Delete_value)
#         print()
#         return(f'Deleted successfully!\nThe updated Menu list:\n{menu_list}')
#     else:
#         return 'Item not available'
 

# def main():
#     print('1.Display items\n2.Add_items\n3.Update_item\n4.Delete_item')
#     user_choice=input('Enter your choice:')
#     if user_choice=='1':
#         print()
#         print('Menu Items:')
#         for item in display_item():
#             print(item)
#     elif user_choice=='2':
#         add_item()
#     elif user_choice=='3':
#         print(update_item())
#     elif user_choice=='4':
#         print(delete_item())
#     else:
#         print('Please enter the valid option....')
# main()
# ____________________________________________________________________________________________________________

# def add(value1,value2):
#     return value1+value2
# def sub(value1,value2):
#     return value1-value2
# def Multi(value1,value2):
#     return value1*value2
# def Div(value1,value2):
#     return value1/value2
# def exp(value1,value2):
#     return value1**value2

# def main():
#     value1=int(input('Enter the value 1: '))
#     value2=int(input('Enter the value 2: '))
#     print('1.Add\n2.Sub\n3.Mul\n4.Div\n5.Exp\nEnter your choice:',end='')
#     user_input=int(input())
#     if user_input==1:
#         print('Add:',add(value1,value2))
#     elif user_input==2:
#         print('Sub:',sub(value1,value2))
#     elif user_input==3:
#         print('Multiplication:',Multi(value1,value2))
#     elif user_input==4:
#         if value2:
#             print('Division:',Div(value1,value2))
#         else:
#             print("Enter non zero")
#     elif user_input==5:
#         print('Exponential:',exp(value1,value2))
#     else:
#         print('Invalid option....')
# main()


