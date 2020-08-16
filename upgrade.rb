data = `yarn outdated`
data = data.split("\n")

index = data.find_index { |line| line =~ /^Package.*Current.*/ }

if index.nil?
  print "No new dependancies\n"
  exit
end

data = data[(index+1)..-2]
data = data.map do |line|
  chunks = line.split(/ +/)
  "#{chunks[0]}@#{chunks[3]}"
end
data = data.join ' '

print "yarn upgrade #{data}\n"
