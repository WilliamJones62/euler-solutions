# What is the 10 001st prime number?

i = 20
j = 0
prime = true
primes = [2,3,5,7,11,13,17,19]

while primes.length < 10001 do

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
    end
  end
  i += 1
end

puts "The 10001st prime numbers is #{primes.last}!"
