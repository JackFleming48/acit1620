def swap(values):
    temp = values[0]
    values[0] = values[4]
    values[4] = temp

nums = [1, 2, 3, 4, 5]
print(nums)

swap(nums)

print(nums)