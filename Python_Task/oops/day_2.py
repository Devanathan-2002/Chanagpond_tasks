# class Bank_Account:
#     Bank_name='HDFC Bank'
#     ROI_1=7
#     def __init__(self):
#         self.Name=""
#         self.Amount=0
#         self.Address=""
#         self.AccountNo=0
    
#     def CreateAccount(self):
#         self.Name=input('Enter the Account Holder Name:')
#         self.Amount=input('Enter the Amount:')
#         self.Address=input('Enter the Address:')
#         self.AccountNo=int(input('Enter the Account Number:'))


#     def DisplayInformation(self):
#         print('--------Your Account Information----------')
#         print('Name of the Acount Holder:',self.Name)
#         print('Address:',self.Address)
#         print(' Account Number:',self.AccountNo)
#         print('Current Balance:',self.Amount)
    
#     @classmethod
#     def Display_bank_info(cls):
#         print('---Display bank details---')
#         print('Bank Nmae:',cls.Bank_name)
#         print('Bank Nmae:',cls.ROI_1)
    
#     @staticmethod
#     def DisplayKYCInformation():
#         print('Submit the following details')
#         print('1.Adhar Card')
#         print('2.Passport size photo')

# def main():
#     # print('Bank name:',Bank_Account.Bank_name)
#     User_1=Bank_Account()
#     # print('Creating First Account:',User_1.Bank_name,User_1.Amount)

#     # User_1.CreateAccount()
#     # User_1.DisplayInformation()
#     # print(Bank_Account.Display_bank_info())
#     print(Bank_Account.DisplayKYCInformation())
# main()



# def final(func):
#     def warpper(*args,**kwargs):
#         print('Function is called')
#         return func(*args,**kwargs)
#     return warpper


# def dummy():
#     return ('function passing inside the anther function')


# fi=final(dummy)

# print(fi())
# @final
# def dummy2():
#     return ('dummy2')
# print(dummy2())



# class student:
#     graduation='be'
#     def graduation_in(cls):
#         print('graduation',cls.graduation)
# student.grad = classmethod(student.graduation_in)
# student.grad()
# print()
# class student:
#     graduation='be'
#     @classmethod
#     def graduation_in(cls):
#         print('graduation',cls.graduation)
        

# student.graduation_in()


# class student:
#     @staticmethod
#     def Add(a,b):
#         return a+b
    
# exe=student()

# print(exe.Add(2,3))
# _______________________________________________________________________________________________________

# INHERITANCE


# PARENTCLASS
# class Person:
#     def __init__(self,idcard,name):
#         self.idcard=idcard
#         self.name=name
    

#     def display_info(self):
#         print(f'Name: {self.name} Id card:{self.idcard}')


# # DERIVE CLASS
# class Employee(Person):
#     def __init__(self, idcard, name,salary):
#         super().__init__(idcard, name)
        
#         self.salary=salary

#     def Show_details(self):
#         return f'Name:{self.name} Id:{self.idcard} salary:{self.salary}'

# exe=Person(123,'Deva')
# exe2=Employee(123,'Deva',30000)

# print(exe2.Show_details())

# exe.display_info()

# __________________________________________________________________________________________



