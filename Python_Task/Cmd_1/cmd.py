# the arguments that are given after the name of the program in the command line shell of the operatiing system

from sys import argv

def addition(value1,value2):
    
    return value1+value2

def main():
    print('application name:',argv[0])

    if len(argv)==2:
        if argv[1]=='--U':
            print('pass arguments: application name')
            exit()
        if argv[1]=='--H':
            print('help: application use to add two numbers')
            exit()
    if len(argv)!=3:
        print('invalid number of arguments\npleaseuse --U flag to get usage\nplease use --H flag for help')
        exit()

    Ret=addition(int(argv[1]),int(argv[2]))
    print('Addition:',Ret)
if __name__=='__main__':
    main()