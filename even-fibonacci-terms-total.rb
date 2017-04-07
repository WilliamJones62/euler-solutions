# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
total = 0

nextfib = 1
fib1 = 1
fib2 = 1
ctr = 2

while nextfib < 4000000 do
  if ctr == 3
    # only every third fibonacci number is even
    total += nextfib
    ctr = 1
  else
    ctr += 1
  end
  fib1 = fib2
  fib2 = nextfib
  nextfib = fib1 + fib2
end

puts "The sum of the even Fibonacci numbers that are less than 4000000 is #{total}!"
