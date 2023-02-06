function bottleSong(num) {
  for (let i =num; i>=0; i--){
    if (i>1){
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottle${i-1==1 ? "" : "s"} of beer on the wall.`)
    } else if (i==1) {
      console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`)
    } else {
      console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${num} bottle${num==1 ? "" : "s"} of beer on the wall.`)
    }
  }
};

bottleSong(99);
