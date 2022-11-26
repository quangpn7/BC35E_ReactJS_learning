const stateDefault = {
  arrDice: [
    { img: "./img/1.png", value: 1 },
    { img: "./img/1.png", value: 1 },
    { img: "./img/1.png", value: 1 },
  ],
  diemCuoc: true, //Tài: true <=> Xỉu: false
  totalWin: 0,
  played: 0,
};

export const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let newState = { ...state };
      newState.diemCuoc = action.payload;
      return newState;
    }
    case "PLAY_GAME": {
      let newState = { ...state };
      newState.played += 1;
      //output expected: array with 3 random dice obj
      let newArrDice = [];
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6) + 1;
        let diceRandom = { img: `./img/${random}.png`, value: random };
        newArrDice.push(diceRandom);
      }

      newState.arrDice = newArrDice;
      //Update result
      let diem = 0;
      for (let dice of newArrDice) {
        diem += dice.value;
      }
      if (
        (diem > 11 && newState.diemCuoc == true) ||
        (diem <= 11 && newState.diemCuoc == false)
      ) {
        newState.totalWin += 1;
      }

      return newState;
    }

    default:
      return state;
  }
};
