# Task 1

# def duplicate_encode(word):
#     #your code here
    
#     word = word.lower()
    
#     list =  ["(" if word.count(i) == 1 else ")" for i in word]
    
#     return "".join(list)

# აქ მე word_ს გავუწერე lower() ფუნქცია რომ case_sensitive_ისთვის ყურადღბა არ მიექცია შემდეგ list comparasion_ნით გავუწერე ცვალდს რომ
# თუ რომელიმე ელემენი იქნებოდა ერთხელ განმეორებული ჩანაცვლებულიყო "("_ით ხოლო დანარჩენ შემთხვევაში ჩანაცვლებულიყო ")"_ით და for
# loop_ის მეშვეობით გადავატარე word_ი 


# Task 2

# def narcissistic( value ):
    
#     value1 = str(value)
#     num1 = len(value1)
    
#     return value ==  sum([int(i) ** num1 for i in value1])


# მე აქ შევქმენი ცვლადი რომელსაც გავუტოლე value string_ის სახით შემდეგ კიდევ ერთი ცვლადი შევქმენი რომელსაც მნიშვნელობად გავუწერე
# პირველი ცვლადის სიგრძე, შემდეგ რაც ყველაზე მთავარია value გავუტოლე value_ს თითოეული რიცხვი გამრავლებული value_ს სიგრძეზე
# და დამატებული ერთმანეთზე ხოლო ეს ტოლობა აბრუნებს boolean_ებს რადგნა ოცემული იყო რომ თუ რიცხვი უდრის მაგ რიცხვის თითოეული
#ელემენტი გამრავლებული იმ რიცხვის სიგრძეზე და დამატებული ერთმანეთზე დაებრუნებინა True სხვა შემთხვევვაში დაებრუნებინა False


# Task 3

# def multiplication_table(size):
    
#     table = [[(i + 1) * (j + 1) for j in range(size)] for i in range(size)]
    
#     return table


# აქ მე შევქმენი table ცვლადი სადაც გამოვიყენენ list comparesion, [(i + 1) * (j + 1) for j in range(size)]
# ეს ნაწილი ქმნის ერთ რიგს . აქ i არის გარეთა loop_ის (რომელიც იცვლის რიგებს), ხოლო j შიდა loop_ის ინდექსია 
# (რომელიც იცვლის სვეტებს). (i + 1) * (j + 1) ითვლის მნიშვნელობას: როდესაც i და j იწყება 0-დან, +1 სჭირდება, რათა 
#  ცხრილში მივიღოთ სწორი მნიშვნელობები (1-დან n-მდე).

