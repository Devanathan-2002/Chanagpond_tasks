# def frequency_count(data,value):
#     list_dict={}
#     for i in data:
#         if i not in list_dict:
#             list_dict[i]=1
#         else:
#             list_dict[i]+=1

#     if value in list_dict.keys():
#         return f'The frequency of the {value} is {list_dict[value]}'
#     else:
#         return 'value not found'
# def main():
#     count_list=[1,2,2,3,4,4,5,6,7]
#     value=int(input('Enter the value to get count: '))
#     print(frequency_count(count_list,value))
# main()

# _____________________________________________________________________________________________________________

# def getting_quistion(data):
#     print('-'*100)
#     for dat in data:
#         print(dat)
# def main():
#     final=[]
#     for i in range(4):
#         user_qns=input(f"Enter the questions no {i+1}:")
#         final.append(user_qns)
#     getting_quistion(final)
# main()

# _____________________________________________________________________________________________________________

# def sum(data):
#     final_sum=0
#     for item in data:
#         final_sum+=item
#     return final_sum
# def min(data):
#     min=data[0]
#     for item in data:
#         if item<min:
#             min=item
#     return min
# def max(data):
#     max=data[0]
#     for item in data:
#         if item>max:
#             max=item
#     return max
# def main():
#     final_list=[100,200,12,5000,2,250,300]
#     user_input=int(input('1. sum\n2. max\n3. min\nEnter your choice:'))
#     match user_input:
#         case 1:
#             print(sum(final_list))
#         case 2:
#             print(max(final_list))
#         case 3:
#             print(min(final_list))
#         case _:
#             return 'Please enter the valid choice!'
# main()

