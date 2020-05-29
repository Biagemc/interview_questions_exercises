def double_numbers(array)
  array.map { |number| number * 2 }
end

p double_numbers([4, 1, 3])  #=> [8, 2, 6]
