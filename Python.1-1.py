print ("問題1-1")
num = [1,3,5,7]

for i in num:
     i **=2
     print(i)

print ("問題1-2")
num = [1,3,5,7]

for j in range(1,8,2):
     j **= 2
     print(j)

print ("問題2-1")
all_place = ['札幌', '東京', '横浜', '大阪', '名古屋', '福岡']
wait_place = ['札幌', '大阪']
get_place = ['横浜']

for place in all_place:
    if place in get_place:
        print(place + "のチケットが当選しました！")
    elif place in wait_place:
        print(place + "のチケットは結果待ち")
    else:
        print(place + "のチケットは落選しました")

print("問題2-2")
all_place = ['札幌', '東京', '横浜', '大阪', '名古屋', '福岡']
wait_place = ['札幌', '大阪']
get_place = ['横浜']

for place in all_place:
    if place in get_place:
        print(place + "のチケットが当選しました！")
    elif place in wait_place:
        print(place + "のチケットは結果待ち")
    else:
        print(place + "のチケットは落選しました")
add_place = get_place + wait_place
add_place = "と".join(add_place)
print("{}のチケットが当選しました！".format(add_place))