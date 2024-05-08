from turtle import *

width(5)
speed(20)

begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

 #door
forward(65)
color("red")
begin_fill()
left(90)

forward(70)
right(90)
forward(70)

right(90)
forward(70)
end_fill()

#floor
penup()
goto(200,200)
pendown()
begin_fill()
right(150)
forward(200)

left(120)
forward(200)
end_fill()

penup()
goto(60,100)
pendown()

begin_fill()
right(58)
forward(40)
pendown()

right(90)
forward(40)

right(90)
forward(40)

right(90)
forward(40)
end_fill()

penup()
goto(150,100)
pendown()

begin_fill()
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
end_fill()
exitonclick()