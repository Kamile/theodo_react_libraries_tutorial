export const types = {
  INCREMENT: "INCREMENT", // just for the Redux only page
  GET: {
    REQUEST: "GET.REQUEST",
    FAILURE: "GET.FAILURE",
    SUCCESS: "GET.SUCCESS"
  },
  ASYNC_INCREMENT: {
    REQUEST: "ASYNC_INCREMENT.REQUEST",
    FAILURE: "ASYNC_INCREMENT.FAILURE",
    SUCCESS: "ASYNC_INCREMENT.SUCCESS"
  }
};

export const incrementCounter = () => ({
  // just for the Redux only page
  type: types.INCREMENT
});

export const getValue = () => ({
  type: types.GET.REQUEST
});

export const getValueSuccess = value => ({
  type: types.GET.SUCCESS,
  value
});

export const asyncIncrementCounter = () => ({
  // just for the Redux only page
  type: types.ASYNC_INCREMENT.REQUEST
});

export const incrementValueSuccess = value => ({
  type: types.ASYNC_INCREMENT.SUCCESS,
  value
});
