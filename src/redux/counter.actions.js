export const types = {
  INCREMENT: "INCREMENT",
  GET: {
    REQUEST: "GET.REQUEST",
    FAILURE: "GET.FAILURE",
    SUCCESS: "GET.SUCCESS",
  }
}

export const incrementCounter = () => ({
  type: types.INCREMENT
})

export const getValue = () => ({
  type: types.GET.REQUEST
})

export const getValueSuccess = value => ({
  type: types.GET.SUCCESS,
  value,
})
