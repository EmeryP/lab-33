import * as utils from '../lib/utils.js';

export const get = url => dispatch => {
  return utils.get(url)
  .then(records => {
    return dispatch(runGet(records))
  })
}

export const getOne = url => dispatch => {
  return utils.get(url)
    .then(records => {
      console.log('in the GetOne actions', records)
      return dispatch(runGetOne(records))
    })
}

const runGet = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}

const runGetOne = payload => {
  return {
    type: 'GETONE',
    payload: payload
  }
}