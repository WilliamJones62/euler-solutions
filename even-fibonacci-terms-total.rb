total = 0

nextfib = 1
fib1 = 1
fib2 = 1
ctr = 2

while nextfib < 4000000 do
  if ctr == 3
    total += nextfib
#    puts "Nextfib is #{nextfib}"
    ctr = 1
  else
    ctr += 1
  end
  fib1 = fib2
  fib2 = nextfib
  nextfib = fib1 + fib2
end

puts "The sum of the even Fibonacci numbers that are less than 4000000 is #{total}!"
