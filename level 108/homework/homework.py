def calc(expr):
    
    res = []
    expr = expr.split()
    
    for i in expr:
        if i in "-+/*":
            first = res.pop()
            second = res.pop()
            
            if i == "+":
                res.append(second + first)
            elif i == "-":
                res.append(second - first)
            elif i == "/":
                res.append(second / first)
            elif i == "*":
                res.append(second * first)
        else:
            if "." in i:
                res.append(float(i))
            else:
                res.append(int(i))
                
    if not res:
        return 0
    
    return res[0]

print(calc("6 5 7 * + 4 3 4 * - 32 4"))