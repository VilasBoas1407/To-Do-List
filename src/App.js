import "./App.css";

import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import Footer from "./Footer";

const useStyles = makeStyles({
  table: {
    maxWidth: 800,
  },
});

function App() {
  const classes = useStyles();

  let [toDo, setToDo] = useState([]);
  let [done, setDone] = useState([]);
  let [text, setText] = useState("");

  function addToDo() {
    setToDo([...toDo, { id: toDo.length, text }]);
  }

  function handleValueChanged(event) {
    setText(event.target.value);
  }

  function handleChecked(data) {
    let toDoList = toDo;
    toDoList.pop(data);
    setToDo(toDoList);
    setDone([...done, data]);
  }

  function handleUnChecked(data) {
    let doneList = done;
    doneList.pop(data);
    setDone(doneList);
    setToDo([...toDo, data]);
  }

  function Remove(row, type) {
    if (type === "toDo") {
      let toDoList = toDo;
      toDoList.pop(row);
      setToDo(toDoList);
    } else {
      let doneList = done;
      doneList.pop(row);
      setDone(doneList);
    }
  }

  function ReturnToDoList() {
    return (
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Finish</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toDo.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.text}</TableCell>
                <TableCell>
                  <Checkbox onChange={() => handleChecked(row)} />
                </TableCell>
                <TableCell>
                  <DeleteIcon onClick={() => Remove(row, "toDo")} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function ReturnDoneList() {
    return (
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Undo</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {done.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.text}</TableCell>
                <TableCell>
                  <Checkbox checked onChange={() => handleUnChecked(row)} />
                </TableCell>
                <TableCell>
                  <DeleteIcon onClick={() => Remove(row, "done")} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div className="App">
      <header className="header"> To Do List</header>
      <div className="container">
        <div className="button-div">
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="Novo Item"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onChange={handleValueChanged}
              />
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={addToDo}>
                Adicionar
              </Button>
            </Grid>
          </Grid>
        </div>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="header-list">To Do</div>
            {ReturnToDoList()}
          </Grid>
          <Grid item xs={6}>
            <div className="header-list">Done</div>
            {ReturnDoneList()}
          </Grid>
        </Grid>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default App;
