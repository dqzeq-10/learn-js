
const ranges = [
    '3 - 5', '3 - 5', '3 - 7', '2 - 5',  '4 - 7',
    '4 - 7', '4 - 7', '3 - 7', '2 - 5',  '2 - 4',
    '3 - 7', '3 - 7', '3 - 5', '4 - 8',  '5 - 9',
    '3 - 5', '3 - 6', '5 - 7', '3 - 5',  '3 - 7',
    '3 - 7', '4 - 7', '2 - 5', '2 - 4',  '4 - 6',
    '4 - 7', '2 - 5', '5 - 6', '4 - 6',  '3 - 6',
    '3 - 6', '3 - 6', '3 - 5', '3 - 6',  '2 - 5',
    '2 - 5', '4 - 6', '3 - 5', '4 - 7',  '3 - 5',
    '5 - 8', '3 - 6', '3 - 6', '2 - 4',  '3 - 5',
    '4 - 7', '3 - 7', '2 - 5', '4 - 6',  '4 - 8',
    '4 - 9', '5 - 9', '2 - 5', '4 - 11', '2 - 5',
    '3 - 7', '4 - 7', '4 - 7', '2 - 4',  '3 - 5',
    '3 - 5', '3 - 5', '3 - 5', '3 - 7',  '2 - 5',
    '3 - 9', '5 - 8'
  ];
  
  // Tính trung bình cho mỗi chuỗi
  const averages = ranges.map(rangeStr => {
    const [min, max] = rangeStr.split(' - ').map(Number);
    return (min + max) / 2;
  });
  
  // Tính trung bình chung
  const overallAverage = averages.reduce((sum, avg) => sum + avg, 0) / averages.length;
  
  console.log(`Trung bình của từng khoảng: ${averages}`);
  console.log(`Trung bình chung: ${overallAverage.toFixed(2)}`);
