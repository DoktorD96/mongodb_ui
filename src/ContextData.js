import React, { useState, createContext } from 'react';
import * as Realm from "realm-web";

export const ContextData = createContext();
var componentMount = false;
window.selectedList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
window.DONE = false;
window.DATABASE = null;
window.appLoadingData = async function () {
  var handleDBloadVar = null;
  var DatabaseHandler = null;
  handleDBloadVar = new Realm.App({ id: "school-yzpuv" });
  const credentials = Realm.Credentials.apiKey("X20ZJF19CvzxWG1S9KM2LdqnIvposWto9haZmbyatYP1utq1SH2qV4O3m1q7VUhm");
  try {
    await handleDBloadVar.logIn(credentials);
    DatabaseHandler = handleDBloadVar.currentUser.mongoClient("mongodb-atlas");
    window.DATABASE = DatabaseHandler.db("tiktok").collection("tiktokdata");
    //console.log(await window.DATABASE.find({}, { limit: 10 }));
  } catch (err) {
    //console.log(err);
  }
}

export const ContextProvider = props => {

  const [db, setDb] = useState({ data: [] });

  const [config, setConfig] = useState({
    options: {
      rowsSelected: [],
      serverSide: false,
      filterType: 'checkbox',
      responsive: 'vertical',
      draggableColumns: {
        enabled: true
      },
      print: false,
      filter: true,
      selectableRowsHeader: true,
      jumpToPage: true,
      rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400, 500],
      headerStyle: {
        fontWeight: "bold"
      },
      customToolbarSelect: function (selectedRows, displayData, setSelectedRows) {
        window.selectedList = [];
        for (let i = 0, l = displayData.length; i < l; i++) {
          window.selectedList.push(displayData[i].dataIndex);
        }
      },
      onTableInit: async function () {
        var timer = setInterval(initData, 1000);
        async function initData() {
          try {
            if (window.DATABASE != null && window.DONE != true) {
              window.DONE = true;
              let data = {};
              data.data = await window.DATABASE.find({}, {});
              setDb(data);
              clearInterval(timer);
            } else {
              window.appLoadingData();
            }
          } catch (e) {
          }
        }
      },
      onTableChange: async (action, tableState) => {
        try {
          var page = tableState.page + 1;
          var totalpages = Math.floor(8620 / tableState.rowsPerPage);
          $("#current_page").text(page);
          $("#total_pages").text(totalpages);
        } catch (e) { }
      },
      customToolbar: function () { return false; },
      //searchText: "",
      //search: false,
      customSearch: function (searchQuery, currentRow, columns) {
        debugger;
      }
      //customSearchRender: () => null
    }
  });


  return (
    <ContextData.Provider value={[{ config, setConfig }, { db, setDb }]}>
      { props.children}
    </ContextData.Provider >
  );
}