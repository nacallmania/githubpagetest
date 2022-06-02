
// **** Reducer에 정의된 action type에 Match되도록 type을 설정한다.
export const SLICE_INC = "slicename/increment";
export const SLICE_DEC = "slicename/decrement";
export const SLICE_NAME = "slicename/setname";
export const Increment = amount => (
    {
        type: SLICE_INC,
        payload: amount
    }
);

export const Decrement = amount => (
    {
        type: SLICE_DEC,
        payload: amount
    }
);

export const Setname = name => (
    {
        type: SLICE_NAME,
        payload: name
    }
);

export const SLICE_SERVICE_NAME = "serviceslice/setname";
export const Setservicename = amount => (
    {
        type: SLICE_SERVICE_NAME,
        payload: amount
    }
);