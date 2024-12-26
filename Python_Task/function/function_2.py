# positionl keyword default

def full_name(Firstname,Lastname,Nationality='Indian'):
    return f'Name:{Firstname} {Lastname} and Nationality:{Nationality}'

def main():
    print()

    print('positional Arguments')
    print(full_name('Devanathan','Kuthappan'))
    print()
    print('positional Arguments exchange')
    print(full_name(Lastname='Kuthappan',Firstname='Devanathan'))
    print()

    print('Keyword Arguments')
    print(full_name(Lastname='Kuthappan',Firstname='Devanathan',Nationality='Others'))

if __name__=='__main__':
    main()

