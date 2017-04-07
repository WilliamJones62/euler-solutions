#What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

n = 1
i = 4
j = 1
k = 1
primes = []
primes.push(2)
primes.push(3)

for i in 4..20 do
  k = i
  for j in 0..(primes.length-1)
    if k % primes[j] == 0
      #evenly divisible by prime so this integer is not prime
      k /= primes[j]
    end
  end
  if k > 1
    #either i was a prime number, or after dividing by all the primes in the array there is a prime remaining
    primes.push(k)
  end
end

for j in 0..(primes.length-1)
  # multiply all the saved primes together to get the answer
  n *= primes[j]
end

puts "The smallest multiple of all the integers from 1 to 20 is #{n}!"
