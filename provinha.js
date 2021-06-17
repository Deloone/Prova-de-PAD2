// 1º

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

//2º 

function someFn(num) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }
}
