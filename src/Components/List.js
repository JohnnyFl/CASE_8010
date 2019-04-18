import React from "react";

const List = props => {
  const { vehicleType, vehicleModel, vehicleItem } = props;
  return (
    <div className="list">
      <ul>
        {vehicleType.map(type => (
          <li key={type.id} variant="body1" id="modal-body">
            <input type="checkbox" id={type.name} />
            {type.name}
            <ul>
              {vehicleModel
                .filter(model => model.vehicleType.name === type.name)
                .map(model => (
                  <li key={model.id} variant="body1" id="modal-body">
                    <input type="checkbox" id={model.name} />
                    {model.name}
                    <ul>
                      {vehicleItem
                        .filter(item => item.vehicleModel.name === model.name)
                        .map(item => (
                          <li key={item.id} variant="body1" id="modal-body">
                            <input type="checkbox" id={item.name} />
                            {item.name}
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
