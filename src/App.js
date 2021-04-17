import React, { useContext, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Checkbox from '@material-ui/core/Checkbox';
import './App.css';
import {ContextData} from "./ContextData";
import Data from './Data';
import Avatar from '@material-ui/core/Avatar';
import _lang from "lodash/lang";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";
var componentMount = false;
window.selectedList = [0,1,2,3,4,5,6,7,8,9];


const CustomCheckbox = (props) => {
  try{
    var [config,setConfig] = useContext(ContextData);
    const checkboxCheckedCb = () => {
      config.options.rowsSelected = selectedList;
      setConfig(_lang.clone(config));
    };
    
    const checkboxUnCheckedCb = () => {
        config.options.rowsSelected = [];
        setConfig(_lang.clone(config));
    };


    const checkboxOnClickCustom = (data) => {
      if(componentMount){
        try{
          if(data.target.checked){
            checkboxCheckedCb();
          }else{
            checkboxUnCheckedCb();
          }
        }catch(e){
          checkboxUnCheckedCb();
        }
      }
      // try{
      //   if(data.target.checked){
      //     checkboxCheckedCb(config);
      //   }else{
      //     checkboxUnCheckedCb(config);
      //   }
      // }catch(e){
      //   checkboxUnCheckedCb(config);
      // }
    }

    if(props["data-description"] == "row-select-header"){
      return <Checkbox color="primary"
      //props["checked"]
      onClick={(data)=>checkboxOnClickCustom(data)}
      />;
    }else{
      return <Checkbox {...props}/>;
    }
  }catch(e){
    return <Checkbox {...props}/>;
  }
};



function App() {


  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});
 
  const toggle = () => setOpen(!open);


  componentMount = false;
  useEffect(() => {
    componentMount = true;
  });
  const columns = [
    {
     label: "Avatar",
     name: "avatar",
     options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        var fallback = "A";
        try{
          fallback = value.substring(0,1).toUpperCase();
        }catch(e){}
        return(
        <Avatar style={{backgroundColor: "#ff9800"}} src={value}>{fallback}</Avatar>
        );
      }
     }
    },
    {
     label: "First Name",
     name: "first_name",
     options: {
      filter: false,
      sort: true,
     }
    },
    {
     label: "Last Name",
     name: "last_name",
     options: {
      filter: false,
      sort: true,
     }
    },
    {
     label: "Email",
     name: "email",
     options: {
      filter: false,
      sort: true,
     }
    },
    {
      label: "Gender",
      name: "gender",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      label: "City",
      name: "city",
      options: {
       filter: false,
       sort: true,
      }
     }
   ];
  const [config] = useContext(ContextData);
  return (
    <>
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
        <MUIDataTable
        title={""}
        data={Data.datamock.slice(0, 10)}
        columns={columns}
        options={config.options}
        components={{
          Checkbox: CustomCheckbox,
        }}
        />
      </>
  );
}

export default App;
