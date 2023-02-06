def bottle_song(num):
	for i in range(num,-1,-1):
		if i > 1:
			print(f'{i} bottles of beer on the wall, {i} bottles of beer. Take one down and pass it around, {i-1} bottle{"s" if i-1>1 else ""} of beer on the wall.')
		elif i==1:
			print(f'{i} bottle of beer on the wall, {i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.')
		else:
			print(f'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, {num} bottle{"s" if num>1 else ""} of beer on the wall.')
		





bottle_song(99)
