# collection of key/value pairs => object, hash, dictionaries, associative arrays

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

# symbols are lightweight strings (as close to a primitive as you can get in Ruby)

user = {
  :username => "jstamos",
  :password => "1234"
}

# puts user
# puts user[:username]

user = {
  username: "jstamos",
  password: "1234"
}

puts user
