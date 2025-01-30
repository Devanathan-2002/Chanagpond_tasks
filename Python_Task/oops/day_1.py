class Bank_Account:
    def __init__(self):
        self.Name=""
        self.Amount=0
        self.Address=""
        self.AccountNo=0
    
    def CreateAccount(self):
        self.Name=input('Enter the Account Holder Name:')
        self.Amount=input('Enter the Amount:')
        self.Address=input('Enter the Address:')
        self.AccountNo=int(input('Enter the Account Number:'))


    def DisplayInformation(self):
        print('--------Your Account Information----------')
        print('Name of the Acount Holder:',self.Name)
        print('Address:',self.Address)
        print(' Account Number:',self.AccountNo)
        print('Current Balance:',self.Amount)

def main():
    User_1=Bank_Account()
    print('Creating First Account:')

    User_1.CreateAccount()
    User_1.DisplayInformation()
    print()
main()
