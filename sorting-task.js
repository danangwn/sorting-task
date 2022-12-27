const sorting = (choice) => {
  const choices = [
    'new',
    'print',
    'sort',
    'average',
    'extremes',
    'gather',
    'biggies',
    'reverse',
    'push',
    'pop',
    'quit',
  ];
  if (!choices.find((o) => o === auth.userData.accountName)) {
    console.log('not a valid choice');
  } else {
    let currArray = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2];
    if (choice[0] === 'new') {
      const push = [];
      for (let i = 0; i < n; i++) {
        const val = await getRandomArbitrary(0, 1000);
        push.push(val);
      }
      currArray = push;
    }

    if (choice[0] === 'sort') {
      currArray = currArray.sort((a, b) => a - b);
    }

    if (choice[0] === 'average') {
      const sum = currArray.reduce((a, b) => a + b, 0);
      const avg = sum / currArray.length || 0;
      currArray = [avg];
    }

    if (choice[0] === 'gather') {
      const newArr = [];
      for (const val of currArray) {
        if (val.toFixed() % 2 === 0) {
          newArr.push(val);
        } else {
          continue;
        }
      }
      currArray = newArr;
    }

    if (choice[0] === 'biggies') {
      const max = Math.max(...currArray);
      const newArr = [];
      for (let i = 0; i < currArray.length; i++) {
        newArr.push(max);
      }
      currArray = newArr;
    }

    if (choice[0] === 'reverse') {
      const ret = [];
      for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
      }
      currArray = ret;
    }

    if (choice[0] === 'push') {
      currArray.push(choices[1]);
    }

    if (choice[0] === 'pop') {
      currArray = currArray.splice(currArray.length - 1, 1);
    }

    if (choice[0] === 'extremes') {
    }

    if (choice[0] === 'median') {
    }

    if (choice[0] === 'print') {
      for (const val of currArray) {
        console.log(val);
      }
    }
  }
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};
