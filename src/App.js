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
import { CheckBox } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    maxWidth: 800,
  },
});

function App() {
  const classes = useStyles();

  let [data, setData] = useState([]);

  let [text, setText] = useState("");

  function addData() {
    setData([...data, { id: data.length, text }]);
  }

  function handleValueChanged(event) {
    setText(event.target.value);
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.text}</TableCell>
                <TableCell>
                  <CheckBox />
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="header-list">To Do</div>
            {ReturnToDoList()}
          </Grid>
          <Grid item xs={6}>
            <div className="header-list">Done</div>
            {ReturnToDoList()}
          </Grid>
        </Grid>

        <br />
      </div>
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
            <Button variant="contained" color="secondary" onClick={addData}>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
