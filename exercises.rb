# def most_used(total)

#     list_input = []
#     entries = 0
#     list_count = Hash.new(0)

#     puts "Please enter a total of 10 words. You can repeat at any time if you want:"

#     while entries < total
#         list_input << gets.chomp
#         entries += 1
#     end

#     list_input.each do |v|
#         list_count[v] += 1
#     end

#     puts "#{list_count.key(list_count.values.max)} was your word most used"

# end

# most_used(10)

# input => “(x + [1, {a: 2, b: 3}])”
# string containing parentesis, brackets and curly brackets

# output => true
# return true or false if the closing are properly done

# 1 - split the string
# 2 - loop through the string using each loop
# 3 - create 3 if conditions, 1 for each closing characther
# 4 - look for the other matching side and return true id it did

# string = "(x + 1])["

# string_splitted = string.split("")
# p string_splitted
# string_splitted.each do |char|
#   if char == "("
#     # run another loop to check up to that position
#     p string_splitted.include?(")")
#   end
#   if char == "["
#     p string_splitted.include?("]")
#   end
#   if char == "{"
#     p string_splitted.include?("}")
#   end
# end
# Write a function that takes in two strings and returns a new string with the letters of the two strings shuffled together one after another.

# input => "fruit" "great"
# output => "fgrrueiatt"

# have each strings splitted

# then create loop where takes randomly one letter from each string into a new string

# 1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

# numbers = [2, 32, 80, 18, 12, 3]

# p numbers.select { |num| num < 20 }

#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

# strings = ["winner", "winner", "chicken", "dinner"]

# p strings.select { |letter| letter[0] == "w" }

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

# hashes = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

# p hashes.select { |item| item[:price] > 5 }

#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

# numbers = [2, 4, 5, 1, 8, 9, 7]

# p numbers.select { |num| num.even? }

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

# strings = ["a", "man", "a", "plan", "a", "canal", "panama"]

# p strings.select { |string| string.size < 4 }

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key)
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

# hashes = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

# p hashes.select { |name| name[:name].size < 6 }

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

# numbers = [8, 23, 0, 44, 1980, 3]

# p numbers.select { |num| num < 10 }

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

# strings = ["big", "little", "good", "bad"]

# p strings.select { |string| string[0] != "b" }

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

# hashes = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

# p hashes.select { |price| price[:price] < 10 }

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

# numbers = [2, 4, 5, 1, 8, 9, 7]

# p numbers.select { |num| num.odd? }

# ************************************************************

#  1. Use a nested loop to convert an array of number pairs into a single flattened array.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

# array = [[1, 3], [8, 9], [2, 16]]
# new_array = []
# array.each do |number|
#   number.each do |sub_number|
#     new_array << sub_number
#   end
# end
#  or
# p array.flatten

#  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
#     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

# strings_1 = ["a", "b", "c"]
# strings_2 = ["d", "e", "f", "g"]
# new_array = []
# strings_1.each do |string|
#   strings_2.each do |another_string|
#     new_array << string + another_string
#   end
# end

#  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
#     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

# strings = ["a", "b", "c", "d"]
# new_array = []
# strings.each do |string|
#   strings.each do |letter|
#     new_array << string + letter
#   end
# end
# p new_array
#  4. Use a nested loop to find the largest product of any two different numbers within a given array.
#     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

# numbers = [5, -2, 1, -9, -7, 2, 6]
# largest_product = 0
# product = 0
# numbers.each do |num|
#   numbers.each do |number|
#     product = number * num
#     if number == num
#     elsif product > largest_product
#       largest_product = product
#     end
#   end
# end
# p
# p largest_product

#  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

# numbers = [[1, 3], [8, 9], [2, 16]]
# sum = 0
# numbers.each { |num| sum += num.reduce(:+) }
# p sum
#  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
#     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

# numbers = [1, 2]
# new_array = []
# numbers.each do |num|
#   numbers_2.each do |number|
#     new_array << num + number
#   end
# end

# p numbers.map { |num| numbers_2.map { |number| num + number } }

#  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
#     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

# numbers = [2, 8, 3]
# product = []
# numbers.each do |number|
#   numbers.each do |num|
#     product << number * num
#   end
# end

# p product
#  8. Use a nested loop to find the largest sum of any two different numbers within an array.
#     For example, [1, 8, 3, 10] becomes 18.

# numbers = [1, 8, 3, 10]
# sum = 0
# largest_sum = 0
# numbers.each do |number|
#   numbers.each do |num|
#     sum = number + num
#     if num == number
#     elsif sum > largest_sum
#       largest_sum = sum
#     end
#   end
# end
# p largest_sum

#  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
#     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

# numbers = [2, 5, 3, 1, 0, 7, 11]

# def sum_of_ten(array)
#   new_array = []
#   sum = 0
#   array.each do |number|
#     break if new_array != []
#     array.each do |num|
#       sum = number + num
#       if num == number
#       elsif sum == 10
#         new_array = [number, num]
#         return new_array
#         break
#       end
#     end
#   end
#   if new_array == nil
#     return false
#   end
# end

# p sum_of_ten(numbers)
# 10. Use a nested loop to convert an array of string arrays into a single string.
#     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

# strings = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]]
# single_string = ""
# p strings.map { |string| string.each { |value| single_string += value } }.join



#  1. Convert an array of arrays into a hash.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

# array = [[1, 3], [8, 9], [2, 16]]

# hash = Hash[array]

# p hash

#  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.

#     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

# array = [{ id: 1, color: "blue", price: 32 }, { id: 2, color: "red", price: 12 }]
# hash = {}
# array.each do |item|
#   hash[item[:id]] = item
# end

# p hash

#  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
#     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

# string = "bookkeeper"
# string_split = string.chars
# hash = {}
# string_split.each do |letter|
#   count = 0
#   string_split.each do |counter|
#     if letter == counter
#       count += 1
#     end
#   end
#   hash[letter] = count
# end

# p hash
#  4. Convert a hash into an array of arrays.
#     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

# hash = { "chair" => 100, "book" => 14 }
# p hash.map { |k, v| [k, v] }

#  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
#     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

# hash = { 321 => { name: "Alice", age: 31 }, 322 => { name: "Maria", age: 27 } }

# array = []
# hash.each do |k, v|
#   v[:id] = k
#   array << v
# end
# p array

#  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
#     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

# array = ["do", "or", "do", "not"]
# hash = {}

# array.each do |string|
#   count = 0
#   array.each do |counting|
#     if string == counting
#       count += 1
#     end
#   end
#   hash[string] = count
# end

# p hash

#  7. Convert a hash into a flat array containing all the hash’s keys and values.
#     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

# hash = { "a" => 1, "b" => 2, "c" => 3, "d" => 4 }
# array = []
# # array = hash.to_a.flatten

# hash.each do |k, v|
#   array << k
#   array << v
# end

# p array

#  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
#     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

# prices = { "chair" => 75, "book" => 15 }
# items = [{ name: "chair", color: "red", weight: 10 }, { name: "book", color: "black", weight: 1 }]
# new_items = {}

# items.each do |hash|
#   prices.each do |key, value|
#     hash[:price] = value
#     new_items[key] = hash
#   end
# end

# p new_items

#  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
#     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

# array = [{ author: "Jeff Smith", title: "Bone" }, { author: "George Orwell", title: "1984" }, { author: "Jeff Smith", title: "RASL" }]
# new_hash = {}

# array.each do |hash|
#   if new_hash.any?(hash[:author])
#     titles = []
#   end
# end

# p new_hash

# 10. Given a hash, create a new hash that has the keys and values switched.
#     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.









# numbers = [2, 4, 6]

# def max_product(array)
#   value1 = numbers.max
#   numbers.delete(value1)
#   value2 = numbers.max
#   result = value1 * value2

#   return p result
# end

# string1 = "bothersome"
# splitted_1 = string1.split("")
# string2 = "otherwise"
# splitted_2 = string2.split("")
# index = 0
# substring = []
# while index < splitted_1.length
#   subindex = 0
#   while subindex < splitted_2.length
#     if splitted_1[index] == splitted_2[subindex]
#       substring << splitted_2[subindex]
#     end
#     subindex += 1
#   end
#   index += 1
# end

# p substring.join