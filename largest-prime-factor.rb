n = 600851475143
i = 2

while i < 1000000 do

   if n % i == 0
    if n == i
      i = 2000000
    else
      n /= i
    end
  end
  i += 1
end

puts "The largest prime factor in 600851475143 is #{n}!"
