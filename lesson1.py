from turtle import *

width(7)
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

#now we paind door
forward(70)
color("red")
begin_fill()
left(90)

forward(70)
right(90)

forward(60)
right(90)

forward(70)
end_fill()

penup()
goto(200,200)
pendown()

#now we draw floor for a house
begin_fill()
right(145)
forward(190)

left(114)
forward(180)
end_fill()

#now we make windows for  a house 
color("brown")
begin_fill()
penup()
goto(7,100)
pendown()

left(120)
forward(60)

left(90)
forward(60)

left(90)
forward(60)

left(90)
forward(60)
end_fill()

penup()
goto(180,100)
pendown()

#now we pain the second windows for house
begin_fill()
right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)
end_fill()
exitonclick()