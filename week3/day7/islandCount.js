// I : string that represint our map (water and islands)
// O : number of contiguous island
// C : none
// E : empty string

const countIslands = function(mapStr) {
    // water => .
    // land => 0

    let islands = 0;
    const mapArr = mapStr.split('\n').map(function(row) {
      return row.split('');
    })
   
    function deleteIsland(x, y) {
      mapArr[y][x] = '.';
      if(y > 0) {
        if (mapArr[y-1][x] === '0') {
          deleteIsland(x, y-1);
        }
      }
      if(y < mapArr.length-1) {
        if (mapArr[y+1][x] === '0') {
          deleteIsland(x, y+1);
        }
      }
      if(x > 0) {
        if (mapArr[y][x-1] === '0') {
          deleteIsland(x-1, y);
        }
      }
      if (x < mapArr[y].length) {
        if (mapArr[y][x+1] === '0') {
          deleteIsland(x+1, y);
        }
      }
    }
    for (let y = 0; y < mapArr.length; y++) {
      for (let x = 0; x < mapArr[y].length; x++) {
        if (mapArr[y][x] === '0') {
          islands++;
          deleteIsland(x, y);
        }
      }
    }
    return islands;
}

console.log(countIslands(`..0..0
                          ..00..0
                          ...0..
                          .0.0..
                          .000..
                          .....0`));
  