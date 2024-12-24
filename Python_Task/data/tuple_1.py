roll_number=(123,124,125,126,127,123)
mixed_type=('shubam',123,True,78.90)

# #type
# # using positive index:
# print(mixed_type[0])
# #using positive index:
# print(mixed_type[2])
# #using negative index:
# print(mixed_type[-3:-1])
# #using negative index:
# print(roll_number[-4:-1])


# data=[1,2,3,4,5,6]
# final=[12,3,4,5,6,*data]

# print(final)


employ_detail=('shubam',123,'trailer')
(name,jobid,jobrole)=employ_detail
print(jobrole)
print(jobid)

employ_detail=('shubam',123,210320,'trailer')
(name,*jobid,jobrole)=employ_detail
print(jobrole)
print(jobid)