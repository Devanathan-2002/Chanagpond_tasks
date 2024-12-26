# # create a dictionary

# # Dictionary

# # ->A dictionary is collection of key: value pair
# # -- here, each key is connected to ac value
# -- use a key to access the value
# -- key should be unique
# -- mutable object


# watch_details={
#     'Titan':2000,
#     'Fastrack':3000,
#     'Sonata':2000,
#     'Noise':5000,
#     'Titan':3000
# }

# # print('Dictionary:',watch_details)
# # print('Length:',len(watch_details))
# # print('Access values:',watch_details['Fastrack'])

# # Mutables objects
# watch_details['Noise']=7000
# print('Modifying value:',watch_details)

# # type



# employee_details={
#     'Name':'Deva',
#     'Jobid':6000,
#     'is_active':True,
#     'package':7.5
# }


# print('Get Method:',employee_details.get('is_active'))
# print('keys Method:',employee_details.keys())
# print('values Method:',employee_details.values())
# print('items Method:',employee_details.items())
# # pop_items=employee_details.popitem()
# pop=employee_details.pop('Jobid')
# update=employee_details.update({'Name':'Devanathan K'})
# print(employee_details)

# watch_details={
#     'Titan':2000,
#     'Fastrack':3000,
#     'Sonata':2000,
#     'Noise':5000,
#     'Titan':3000
# }

# watch_details.update({'Noise':{'Bx':30000,'Rx':4000}})

# print(watch_details['Noise']['Rx'])

