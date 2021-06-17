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

//3º

function calculator(num1, num2) {
  return callback => callback(num1, num2)
}

//4º 

// vai ser: 4, 1, 5, 1

// O 5º eu n consegui fazer ;-;
