import React, { Component } from "react";
import WrapperModalWindow from "./Components/WrapperModalWindow";
import {
  LOAD_VEHICLE_TYPE,
  LOAD_VEHICLE_MODEL,
  LOAD_VEHICLE_ITEM,
  VEHICLE_TYPE_API,
  VEHICLE_MODEL_API,
  VEHICLE_ITEM_API
} from "./Constants/constants";
import { connect } from "react-redux";
import loadData from "./Actions/actions";
import "./Styles/App.css";

const mapDispatchToProps = {
  loadData
};

class App extends Component {
  componentDidMount = () => {
    const { loadData } = this.props;
    loadData(VEHICLE_TYPE_API, LOAD_VEHICLE_TYPE);
    loadData(VEHICLE_MODEL_API, LOAD_VEHICLE_MODEL);
    loadData(VEHICLE_ITEM_API, LOAD_VEHICLE_ITEM);
  };

  render() {
    return (
      <div className="App">
        <WrapperModalWindow
          filter={[
            { vehicleTypeId: 4 },
            { vehicleModelId: 4 },
            { vehicleId: 4 }
          ]}
        />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
