import React, {useState, createContext} from 'react';

export const ContextData = createContext();


export const ContextProvider = props => {

    const [config, setConfig] = useState({
        options:{
        rowsSelected: [],
        serverSide: true,
        page: 3,
        count: 1000,
        filterType: 'checkbox',
        responsive: 'vertical',
        print: false,
        filter: true,
        selectableRowsHeader: true,
        rowsPerPageOptions:[10,25,50,100,200,300,400,500],
        headerStyle: {
         fontWeight: "bold"
        },
        customToolbarSelect: function(selectedRows, displayData, setSelectedRows){
          window.selectedList = [];
          for(let i = 0, l = displayData.length; i<l; i++){
            window.selectedList.push(displayData[i].dataIndex);
          }
        },
        customToolbar: function(){return false;}
        }
    });


    return (
        <ContextData.Provider value={[config,setConfig]}>
            {props.children}
        </ContextData.Provider>
    );
}