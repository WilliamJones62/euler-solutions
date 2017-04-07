# What is the largest prime factor of the number 600851475143 ?

n = 600851475143
i = 2

while i < 1000000 do

   if n % i == 0
     # i is a prime number
    if n == i
      # i is the largest prime factor. Exit loop.
      i = 2000000
    else
      # divide n by the current prime factor and start the loop.
      n /= i
    end
  end
  i += 1
end

puts "The largest prime factor in 600851475143 is #{n}!"
