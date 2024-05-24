# block of code (block) => do..end
i = 0

# loop do
#   puts "hello #{i}"
#   i += 1

#   # if (i >= 10)
#   #   break
#   # end

#   break if (i >= 10)
# end

i = 0

# while (i < 10) do
#   puts "hello #{i}"
#   i += 1
# end

# game_over = false

# while (!game_over) do

# end

# until (game_over) do

# end

names = ['alice', 'bob', 'carol']

# for..of => for..in
# for name in names do
#   puts "hello there #{name}"
# end

# names.forEach((name, index) => {})

names.each do |name|
  puts "hello #{name}"
end

names.each_with_index do |name, index|
  puts "the #{name} is at index #{index}"
end
