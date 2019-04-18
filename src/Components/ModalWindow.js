import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "./List";
import "../Styles/ModalWindow.css";

function getModalStyle() {
  const top = 48;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 0,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class ModalWindow extends Component {
  state = {
    open: false,
    searchField: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSearch = ({ target: { value } }) => {
    this.setState({ searchField: value });
  };

  handleSelect = () => {
    const checkbox = document.querySelectorAll("input[type=checkbox]:checked");
    checkbox.forEach(elem => {
      console.log(elem.id);
    });
  };

  render() {
    const { classes, vehicleItem, vehicleModel, vehicleType } = this.props;
    const searchResult = [vehicleItem, vehicleModel, vehicleType];
    console.log(searchResult);
    return (
      <div>
        <Button
          style={{ backgroundColor: "#4BB354" }}
          onClick={this.handleOpen}
        >
          Обрати Техніку
        </Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" id="modal-title">
                Вибір Техніки
              </Typography>
              <TextField
                id="standard-with-placeholder"
                label="Знайти техніку..."
                placeholder="Пошук..."
                className={classes.textField}
                margin="normal"
                value={this.state.searchField}
                onChange={this.handleSearch}
              />
            </div>
            {!this.state.searchField ? <List
              vehicleType={vehicleType}
              vehicleModel={vehicleModel}
              vehicleItem={vehicleItem}
            /> : null}
            
            <Button
              style={{ backgroundColor: "#4BB354" }}
              onClick={this.handleSelect}
            >
              Показати
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.

export default withStyles(styles)(ModalWindow);
