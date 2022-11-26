import { configureStore } from "@reduxjs/toolkit";
import { BaiTapXucXacReducer } from "./reducers/baiTapXucXacReducer";
import { arrNguoiDungReducer } from "./reducers/nguoiDungReducer";
export const store = configureStore({
  reducer: {
    //Nơi chứa state
    fontSize: (state = 16, action) => {
      //   if (action.type === "TANG_GIAM_FONTSIZE") {
      //     state += action.payload;
      //   }
      //   return state;
      switch (action.type) {
        case "TANG_GIAM_FONTSIZE":
          state += action.payload;
          return state;

        default:
          return state;
      }
    },
    imgSrc: (state = "./img/black-car.jpg", action) => {
      switch (action.type) {
        case "SELECT_CAR":
          state = action.payload;
          return state;
        default:
          return state;
      }
    },
    arrNguoiDungReducer: arrNguoiDungReducer,
    baiTapXucXacReducer: BaiTapXucXacReducer,
  },
});
