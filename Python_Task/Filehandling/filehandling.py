import os

# def create_file(filename):
#     if os.path.exists(filename):
#         print('file is already available')
#     else:
#         with open(fr'C:\Users\devanathan.k\Documents\changepondtraining\Assignments\Python_Task\Filehandling\{filename}','w') as file:
#             file.write('hello')
#         print('File created successfully')


# def main():
#     file_name=input('Enter the file name to create: ')
#     create_file(file_name)
# main()


# def copy_content(file1,file2):
#     with open(fr'C:\Users\devanathan.k\Documents\changepondtraining\Assignments\Python_Task\Filehandling\{file1}','r') as filecopy:
#         final=filecopy.read()
#         with open(fr'C:\Users\devanathan.k\Documents\changepondtraining\Assignments\Python_Task\Filehandling\{file2}','w') as filepaste:
#             filepaste.write(final)

# def main():
#     file1=input('Enter the file to copy:')
#     file2=input('Enter the new file to paste the content:')
#     copy_content(file1=file1,file2=file2)
# main()


# import requests,random
# url='https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg'

# res=requests.get(url)

# number=random.randint(10,99999)

# with open(fr'C:\Users\devanathan.k\Documents\changepondtraining\Assignments\Python_Task\Filehandling\{number}.jpg','wb') as img:
#     print(res.content)
#     img.write(res.content)
#     print('Completed...')


import argparse

parser = argparse.ArgumentParser(description="Simple CLI example")

# Adding arguments
parser.add_argument("name", type=str, help="Your name")
parser.add_argument("--age", type=int, help="Your age (optional)")

args = parser.parse_args()

print(f"Hello {args.name}!")
if args.age:
    print(f"You are {args.age} years old.")

