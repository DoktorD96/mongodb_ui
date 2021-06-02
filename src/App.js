import React, { useContext, useEffect, useCallback, /*componentDidMount*/ } from "react";
import MUIDataTable from "mui-datatables";
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import './App.css';
import { ContextData } from "./ContextData";
import Avatar from '@material-ui/core/Avatar';
import _lang from "lodash/lang";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";
// import * as Realm from "realm-web";



const CustomCheckbox = (props) => {
  try {
    if (props["data-description"] == "row-select-header" || props["data-description"] == "row-select") {
      return "";
    } else {
      return <Checkbox {...props} />;
    }
  } catch (e) { return <Checkbox {...props} />; }
};



function App() {
  const [open, setOpen] = React.useState(false);
  const [{ config, setConfig }, { db, setDb }] = useContext(ContextData);
  var timer = null;
  // async function initData() {
  //   // try {
  //   //   if (window.DATABASE != null && window.DONE != true) {
  //   //     console.log("1");
  //   //     window.DONE = true;
  //   //     let response = await window.DATABASE.find({}, { limit: 10 });
  //   //     db.data = response;
  //   //     setDb(db);
  //   //     clearInterval(timer);
  //   //   } else {
  //   //     console.log("2");
  //   //     window.appLoadingData();
  //   //   }
  //   // } catch (e) {
  //   // }
  // }


  useEffect(() => {
    //timer = setInterval(initData, 1000);
  });


  const columns = [
    {
      label: "Avatar",
      name: "Avatar",
      options: {
        filter: false,
        sort: false,
        download: false,
        searchable: false,
        customBodyRender: (value, tableMeta) => {
          let fallback = "A";
          try {
            fallback = tableMeta.rowData[1].substring(1, 2).toUpperCase();
          } catch (e) { }
          return (
            <Avatar style={{ backgroundColor: "#ff9800" }} src={value}>{fallback}</Avatar>
          );
        }
      }
    },
    {
      label: "User",
      name: "Adress",
      options: {
        searchable: true,
        filter: false,
        sort: true,
      }
    },
    {
      label: "LinkProf",
      name: "Link",
      options: {
        searchable: false,
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          try {
            //var url = "https://www.tiktok.com/@" + tableMeta.rowData[3].toString();
            return <Link
              href={value}
              target="_blank"
            >
              {value}
            </Link>;
          } catch (e) { return value; }
        }
      }
    },
    {
      label: "IDhide",
      name: "IdBroj",
      options: {
        display: "excluded",
        filter: false,
        sort: true,
      }
    },

    {
      label: "Ime",
      name: "Ime",
      options: {
        searchable: true,
        filter: false,
        sort: true,
      }
    },
    {
      label: "Signature",
      name: "Potpis",
      options: {
        filter: true,
        sort: true,
        searchable: false,
        filterOptions: {
          names: ['No Signature', 'Signature'],
          logic: (location, filters, row) => {
            if (filters.indexOf("No Signature") > -1 && filters.indexOf("Signature") > -1) {
              return true;
            }
            if ((location == "#no_signature#" || location == "No bio yet") && filters.indexOf("Signature") > -1) {
              return true;
            } else if ((location != "#no_signature#" && location != "No bio yet") && filters.indexOf("No Signature") > -1) {
              return true;
            } else {
              return false;
            }
            return false;
          },
        },

      }
    },
    {
      label: "Link",
      name: "LinkOpis",
      options: {
        searchable: false,
        filter: true,
        sort: true,
        filterOptions: {
          names: ['Link', 'No Link'],
          logic: (location, filters, row) => {
            if (filters.indexOf("No Link") > -1 && filters.indexOf("Link") > -1) {
              return true;
            }
            if (location == "#no_link#" && filters.indexOf("Link") > -1) {
              return true;
            } else if (location != "#no_link#" && filters.indexOf("No Link") > -1) {
              return true;
            } else {
              return false;
            }
            return false;
          },
        },
      }
    },
    {
      label: "Kreiran",
      name: "KreiranTimestamp",
      options: {
        searchable: false,
        filter: false,
        sort: true,
      }
    },
    {
      label: "Prati",
      name: "BrojOsobaKojePrati",
      options: {
        searchable: false,
        filter: false,
        sort: true,
      }
    },
    {
      label: "Pratioci",
      name: "BrojPratilaca",
      options: {

        searchable: false,
        filter: false,
        sort: true,
      }
    },
    {
      label: "Lajkovi",
      name: "BrojLajkova",
      options: {

        searchable: false,
        filter: false,
        sort: true,
      }
    },
    {
      label: "Br.Video",
      name: "BrojVideoUploada",
      options: {
        searchable: false,
        filter: false,
        sort: true,
      }
    },
    {
      label: "Mejl",
      name: "Mail",
      options: {
        searchable: false,
        filter: true,
        sort: true,
        filterOptions: {
          names: ['Mejl', 'No Mejl'],
          logic: (location, filters, row) => {
            if (filters.indexOf("No Mejl") > -1 && filters.indexOf("Mejl") > -1) {
              return true;
            }
            if (location == "#no_email#" && filters.indexOf("Mejl") > -1) {
              return true;
            } else if (location != "#no_email#" && filters.indexOf("No Mejl") > -1) {
              return true;
            } else {
              return false;
            }
            return false;
          },
        },
      }
    }
  ];

  return (
    <MUIDataTable
      title={""}
      columns={columns}
      options={config.options}
      data={db.data}
      components={{
        Checkbox: CustomCheckbox,
      }}
    />
  );
}

export default App;