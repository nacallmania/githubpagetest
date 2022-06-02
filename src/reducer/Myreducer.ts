import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//import { nanoid } from 'nanoid'

export const initialState = {
  guest: 
    {
      name: '이름을 입력하세요',
      email: 'nacallman@gmail.com',
    }
}


// 투두 슬라이스
// Reducer의 액션 타입은 슬라이스 이름("slicename")을 접두어로 사용해서 자동 생성됩니다. -> 'slicename/increment', 'slicename/decrement'
// 이에 상응하는 액션 타입을 가진 액션이 디스패치 되면 리듀서가 실행됩니다.
const slice = createSlice({
  name: 'slicename',  // Slice 이름
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.guest.email = action.payload;    
    },
    decrement: (state) => {
      state.guest.name = "윤승일-";
      state.guest.email = "nacallman@daum-";
    },
    setname: (state, action) => {
      state.guest.name = action.payload;
    }
  },
});

// Action 함수를 export
export const { increment, decrement } = slice.actions;

export default slice.reducer; 