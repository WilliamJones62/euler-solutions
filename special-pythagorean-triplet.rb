# There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

product = 1
b = 2
a = 1
found = false

while a < 332 do
  # a must less than one third the total circumference of the triangle
  b = a + 1
  # b must be greater than a
  while a + b < 665
    # a + b must be less than 2/3 the total circumference of the triangle
    c = (1000 - a) - b
    if (a ** 2) + (b ** 2) == c ** 2
      # this is the triplet we want
      found = true
      break
    else
      b += 1
    end
  end
  if found
    break
  else
    a += 1
  end
end

product = a*b*c
puts "The largest product is #{product}!"
