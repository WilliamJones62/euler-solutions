n = 0
i = 0
j = 0
k = 0

for i in 1..100 do
  j = j + (i**2)
end

for i in 1..100 do
  k = k + i
end

k **= 2

n = k - j

puts "The difference between the square of the sum and the sum of the squares of the first 100 natural numbers is #{n}!"
