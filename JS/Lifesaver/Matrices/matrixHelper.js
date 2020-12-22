function displayMatrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] <= 99 && array[i][j] >= 10)
        document.body.insertAdjacentText('beforeend', `${array[i][j]}`);
      else if (array[i][j] <= 9)
        document.write("&ensp;&nbsp;" + array[i][j] + "&emsp;");
      else document.write(array[i][j] + "&emsp;");
    }
    document.write("<br>");
  }
}

// export default displayMatrix;
