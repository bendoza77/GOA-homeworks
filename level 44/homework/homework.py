def run_lenght_code(s):

    res = []

    first = s[0]

    count = 1

    for i in range(1, len(s)):
        if s[i] == first:
            count += 1
        else:
            res.append((count, first))
            first = s[i]
            count = 1

    res.append((count, first))

    return res


print(run_lenght_code("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"))