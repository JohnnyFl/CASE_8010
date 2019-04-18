import React, { Component } from "react";
import ModalWindow from "./ModalWindow";
import { connect } from "react-redux";

const mapStateToProps = ({ vehicleType, vehicleModel, vehicleItem }) => {
  return {
    vehicleType,
    vehicleModel,
    vehicleItem
  };
};

class WrapperModalWindow extends Component {
  state = {
    vehicleType: [],
    vehicleModel: [],
    vehicleItem: []
  };

  static getDerivedStateFromProps = (props, state) => {
    if (
      props.vehicleType !== state.vehicleType &&
      props.vehicleModel !== state.vehicleModel &&
      props.vehicleItem !== state.vehicleItem
    ) {
      return {
        vehicleType: props.vehicleType,
        vehicleModel: props.vehicleModel,
        vehicleItem: props.vehicleItem
      };
    }
    return null;
  };

  render() {
    const { vehicleType, vehicleModel, vehicleItem } = this.state;

    return (
      <div>
        {vehicleType.length === 0 &&
        vehicleModel.length === 0 &&
        vehicleItem.length === 0 ? null : (
          
          <ModalWindow
            vehicleType={vehicleType}
            vehicleModel={vehicleModel}
            vehicleItem={vehicleItem}
          />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WrapperModalWindow);


  /* <ModalWindow
            vehicleType={[vehicleType[filter[0].vehicleTypeId]]}
            vehicleModel={[vehicleModel[filter[1].vehicleModelId]]}
            vehicleItem={[vehicleItem[filter[2].vehicleId]]}
          /> */
