# Find the sum of all the primes below two million
i = 20
j = 0
prime = true
primes = [2,3,5,7,11,13,17,19]
total = 77

for i in 20 .. 1999999

  if i % 2 != 0 && i % 5 != 0
    # eliminate all even numbers and multiples of 5
    prime = true
    for j in 1 .. (primes.length - 1)
      # skip first prime ('2') because i will not be even
      if i % primes[j] == 0
        # not prime
        prime = false
        break
      end
    end
    if prime
      primes.push(i)
      total += i
    end
  end
  i += 1
end

puts "The sum of all primes < 2000000 is #{total}!"
