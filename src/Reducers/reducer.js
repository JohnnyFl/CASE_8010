import {
  LOAD_VEHICLE_TYPE,
  LOAD_VEHICLE_MODEL,
  LOAD_VEHICLE_ITEM
} from "../Constants/constants";

const initialState = {
  vehicleType: [],
  vehicleModel: [],
  vehicleItem: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VEHICLE_TYPE:
      return {
        ...state,
        vehicleType: state.vehicleType.concat(action.payload)
      };
    case LOAD_VEHICLE_MODEL:
      return {
        ...state,
        vehicleModel: state.vehicleModel.concat(action.payload)
      };
    case LOAD_VEHICLE_ITEM:
      return {
        ...state,
        vehicleItem: state.vehicleItem.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
