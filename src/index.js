import React from 'react';
import ReactDOM from 'react-dom';
import { Container, FormControl, Select, MenuItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import './index.css';
import App from './App';
import {ContextProvider} from "./ContextData";
//import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
//import { DateRangePicker } from "materialui-daterange-picker";
//import 'react-daterange-picker/dist/css/react-calendar.css' 
import DateRangePicker from "react-daterange-picker";
ReactDOM.render(

  {/*<MuiPickersUtilsProvider utils={MomentUtils}>
        {/* <DatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-from"
        label="Date picker inline"
        value={new Date()}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        //onChange={handleDateChange} 
        /> 
        <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={new Date()}
        //onChange={date => handleDateChange(date)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </>
        )}
      />
        
        }
    </MuiPickersUtilsProvider>
    */}
  <ContextProvider>
    
    <Container fixed>
    {/* <DateRangePicker
        initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}
      >
      <button>Click Me To Open Picker!</button>
    </DateRangePicker> */}
   <DateRangePicker
          locale={"EN"}
          numberOfCalendars={2}
          selectionType="range"
          minimumDate={new Date()} />
    <div style={{paddingBottom:"20px"}}/>
    <Alert severity="info">TikTok Scrapper Aplication</Alert>
    <div style={{paddingBottom:"20px"}}/>
    
    <div style={{paddingBottom:"20px"}}/>
    <App />
    <p style={{textAlign:"center"}}>
    Page <b>5</b> of <b>50</b> <span style={{paddingRight:"8px"}}/>
    <FormControl>
        <Select
          inputProps={{ 'aria-label': 'Without label' }}
          value={1}
        >
          <MenuItem value={1}>
            <em>1</em>
          </MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </p>
    <div style={{paddingBottom:"20px"}}/>
    <Alert severity="info" id="footer">Viser 2021, BigData</Alert>
    <div style={{paddingBottom:"20px"}}/>
    </Container>
  
  </ContextProvider>,
  document.getElementById('root')
);
