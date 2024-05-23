from turtle import *

width(5)
speed(10)

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

forward(60)
color("red")
begin_fill()
left(90)

forward(70)
right(90)

forward(70)
right(90)

forward(70)
right(90)
end_fill()

penup()
goto(200,200)
pendown()

begin_fill()
right(61)
forward(200)

left(120)
forward(200)
end_fill()

penup()
goto(60,100)
pendown()

color("brown")
begin_fill()
right(60)
forward(50)

right(90)
forward(50)

right(90)
forward(50)

right(90)
forward(50)
end_fill()

penup()
goto(140,100)
pendown()

begin_fill()
left(90)

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)

end_fill()
exitonclick()