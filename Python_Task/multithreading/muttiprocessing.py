# import os,multiprocessing,timeit,time


# def Square(num):
#     print("Square Pid:",os.getpid())
#     print("Square of the Number:",num**2)

# def Cube(num):
#     print("Square Pid:",os.getpid())
#     print("Cube of the Number:",num**3)

# def main():
#     p1=multiprocessing.Process(target=Square,args=(5,))
#     p2=multiprocessing.Process(target=Cube,args=(5,))
#     p1.start()
#     p2.start()
#     print(p1.pid)
#     print(p2.pid)
#     # await until the process is finished
#     p1.join()
#     p2.join()
#     # print(help(timeit))
# if __name__=="__main__":
#     start=time.time()
#     print("Square Pid:",os.getpid())
#     main()
#     end=time.time()
#     print(end-start)
#     print('Time taken:',timeit.Timer(main).timeit(number=100))

from concurrent.futures import ThreadPoolExecutor
from timeit import Timer

def thousand_loop():
    for i in range(100000):
        print(i)




def threader():
    with ThreadPoolExecutor() as executor:
        executor.submit(thousand_loop).result()


print(Timer(threader).timeit(number=1))
print(Timer(thousand_loop).timeit(number=1))