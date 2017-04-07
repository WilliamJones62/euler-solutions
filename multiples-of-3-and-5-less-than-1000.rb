#Find the sum of all the multiples of 3 or 5 below 1000.

@grandtotal = 0
@total = 0

def compute(i)
  multiple = i
  ctr = 1
  while multiple < 1000 do
    @total += multiple
    ctr += 1
    multiple = i * ctr
  end
end

compute(3)
@grandtotal = @total
@total = 0
compute(5)
@grandtotal += @total
@total = 0
compute(15)
# don't want to include both multiples of 3*5 and 5*3 so subtract one of them from the total
@grandtotal -= @total

puts "The sum of the multiples of 3 and 5 that are less than 1000 is #{@grandtotal}!"
