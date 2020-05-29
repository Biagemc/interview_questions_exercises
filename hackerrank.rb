# def superReducedString(s)
#   string = s.split("")

#   while true
#     i = 0
#     is_finished = false
#     while i < string.length
#       if string[i] == string[i + 1]
#         string.slice!(i, 2)
#         is_finished = true
#         i += 1
#       else
#         i += 1
#       end
#     end

#     if is_finished == false
#       if string.join == ""
#         return "Empty String"
#       else
#         return string.join
#       end
#       break
#     end
#   end
# end

# p superReducedString("aaabccddd")
# p superReducedString("baab")
# p superReducedString("aa")

# def timeConversion(s)
#   time = s.split("")
#   time.delete(":")
#   new_format = ""
#   minutes = time[2] + time[3]
#   seconds = time[4] + time[5]
#   if time.include?("P")
#     if time[0] == "1" && time[1] == "2"
#       hour = "12"
#     else
#       p time[0].to_i
#       p time[1].to_i
#       hour = (24 - (12 - (time[0] + time[1]).to_i)).to_s
#     end

#     new_format = hour + ":" + minutes + ":" + seconds
#   else
#     hour = time[0] + time[1]
#     if hour == "24" || hour == "12"
#       hour = "00"
#     end
#     new_format = hour + ":" + minutes + ":" + seconds
#   end

#   return new_format
# end

# p timeConversion("11:59:59PM")
