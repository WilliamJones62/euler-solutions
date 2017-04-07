# Find the largest palindrome made from the product of two 3-digit numbers.
n1 = 999
n2 = 999
i = 1
palindromes = []

while n2 > 899 do
  #largest palindrome should be between 999 * 999 and 900 * 900
  while n1 > 899 do
    i = n1 * n2
    product = i.to_s
    # only 6 digit products are possible
    first3 = product.slice(0,3)
    last3 = product.slice(3,3).reverse
    if first3 == last3
      # palindrome
      palindromes.push(i)
      puts "palindrome product of #{n1} and #{n2} = #{i}!"
    end
    n1 -= 1
  end
  n1 = 999
  n2 -= 1
end

i = palindromes[0]
for x in 1..(palindromes.length-1)
  # Search the saved palindromes to find the largest.
  if palindromes[x] > i
    i = palindromes[x]
  end
end

puts "The largest palindrome product of 2 3 digit numbers is #{i}!"
