import R from 'ramda';

const initialState = {
  narou: [],
  db: [],
  merged: []
};

export default (state = initialState, action) => {
  return R.merge(state, (() => {
    switch(action.type) {
      case 'UPDATE_NAROU_LIST': {
        return {
          narou: action.narou,
        };
      }
      default:
        return {};
    }
  })());
};