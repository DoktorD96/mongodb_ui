import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Container, FormControl, Select, MenuItem, Checkbox, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import './index.css';
import App from './App';
import { ContextProvider } from "./ContextData";

/*
$.alert({
                title: "Invalid file type or empty file.",
                content: "",
                draggable: false,
                dragWindowBorder: false,
                theme: "white",
                backgroundDismiss: false,
                backgroundDismissAnimation: ""
            });
            */
ReactDOM.render(
  <ContextProvider>
    <Container maxWidth={false}>
      <div style={{ paddingBottom: "20px" }} />
      <Alert severity="info" id="footer">Tiktok Scrapped Data for <b>MakeUp</b> Niche. Date: <b>05/30/2021</b></Alert>
      <div style={{ paddingBottom: "30px" }} />
      <App />
      <div style={{ paddingBottom: "20px" }} />
      <div style={{ textAlign: "center" }}>
        Page <b id="current_page">1</b> of <b id="total_pages">1</b>
      </div>
      <div style={{ paddingBottom: "20px" }} />
      <Alert severity="info" id="footer">Viser 2021, BigData</Alert>
      <div style={{ paddingBottom: "20px" }} />
    </Container>
  </ContextProvider >, document.getElementById('root'));
