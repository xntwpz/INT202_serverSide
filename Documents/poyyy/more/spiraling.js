function createBox(m, n) { // m=number in array  , n = row
    const result = [];
  
    for (let i = 0; i < n; i++) { // for loop for row
      const row = [];
      for (let j = 0; j < m; j++) { // for loop for each column
        const minDim = Math.min(i, j, n - i - 1, m - j - 1);
        row.push(minDim + 1);
        //console.log(result)
        //console.log('')
      }
      result.push(row);
    }
  
    return result;
  }

console.log(createBox(3,6))
// 0,0,5,4

function createBox(m, n) {
    return Array.from({length: n}, (_, i) =>
      Array.from({length: m}, (_, j) =>
        Math.min(...[i + 1, j + 1, n - i, m - j])
      )
    );
  }