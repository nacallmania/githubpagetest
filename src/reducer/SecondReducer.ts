import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//import { nanoid } from 'nanoid'

export const initialState = {
  service: 
    {
      name: '서비스명',
      desc: 'Description',
    }
}


// 투두 슬라이스
// Reducer의 액션 타입은 슬라이스 이름("slicename")을 접두어로 사용해서 자동 생성됩니다. -> 'slicename/increment', 'slicename/decrement'
// 이에 상응하는 액션 타입을 가진 액션이 디스패치 되면 리듀서가 실행됩니다.
const slice = createSlice({
  name: 'serviceslice',  // Slice 이름
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.service.name = "서비스명A";
      state.service.desc = "서비스 입니다요";
    },
    decrement: (state) => {
        state.service.name = "서비스명B";
        state.service.desc = "서비스 입니다요B";
    },
    setservicename: (state, action) => {
        state.service.name = action.payload;    
    }
  },
});

// Action 함수를 export
export const { increment, decrement } = slice.actions;

export default slice.reducer; 