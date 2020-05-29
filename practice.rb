# # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
# def print_numbers_divisible_by_three
#   index = 1
#   while index <= 1000
#     if index % 3 == 0
#       puts index
#     end
#     index += 1
#   end
# end

# print_numbers_divisible_by_three

# # Write a method that accepts an array of strings and prints out every other string.
# def print_every_other_item(strings)
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       puts string
#     end
#     index += 1
#   end
# end

# print_every_other_item(["a", "b", "c", "d", "e"])

# # Write a method that accepts an array of numbers and returns the sum.
# def compute_sum(numbers)
#   sum = 0
#   numbers.each do |number|
#     sum += number
#   end
#   return sum
# end

# puts compute_sum([2, 4, 5])

# # Start with the hash: city_populations = {chi: 2700000}
# # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
# city_populations = { chi: 2700000 }
# city_populations[:nyc] = 8400000
# city_populations[:sf] = 800000
# p city_populations

# Write a method that prints out every number from 1 to 100.

# def numbers_1_to_100
#   number = 1
#   while number < 101
#     p number
#     number += 1
#   end
# end

# numbers_1_to_100
# # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# def odd_number
#   number = 1
#   while number < 101
#     p number
#     number += 2
#   end
# end

# odd_number

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

# def counting_55
#   numbers = [3, 5, 55, 6, 8, 55]
#   counter = 0
#   numbers.each do |count|
#     if count == 55
#       counter += 1
#     end
#   end
#   return p counter
# end

# counting_55

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# def awesomesauce
#   letters = ["a", "b", "c", "d", "e"]
#   new_array = []
#   letters.each do |string|
#     new_array << string
#     new_array << "awesomesauce"
#   end
#   return p new_array
# end

# awesomesauce

# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

# item_amounts = { chair: 5, table: 2 }
# item_amounts[:chair] -= 2

# p item_amounts

# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

# item_amounts = { chair: 5, table: 2 }
# item_amounts[:desks] = 7
# p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(number)
#   if number == 1
#     return p number
#   else
#     number = number * factorial(number - 1)
#   end
#   return number
# end

# factorial(5)

# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
