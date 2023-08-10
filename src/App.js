// Importiing all the Grid Packages...
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useEffect, useMemo } from "react";
import "ag-grid-enterprise";




function App() {
  // Define all the static variables

  const animateRows = true;
  const [rowData, setRowData] = useState();
  const enableCharts = true;
  const enableRangeSelection = true;
  const enableRangeHandle = true;

  // Define the columns and Rows

  const [columnDefs] = useState([
    {
      field: "title",
      headerName: "title",
      chartDataType: "category",
      filter: true,
      tooltipField: "title",
      headerCheckboxSelection: true,
      enableRowGroup: true,
      checkboxSelection: true,
      rowDrag: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
	{
      field: "worldwide gross (m)",
      headerName: "worldwide gross (m)",
      tooltipField: "worldwide gross (m)",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "% budget recovered",
      headerName: "% budget recovered",
      tooltipField: "% budget recovered",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
{
      field: "X times budget recovered",
      headerName: "X times budget recovered",
      tooltipField: "X times budget recovered",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "budget  (millions)",
      headerName: "budget  (millions)",
      tooltipField: "budget  (millions)",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "domestic gross (m)",
      headerName: "domestic gross (m)",
      tooltipField: "domestic gross (m)",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "domestic %",
      headerName: "domestic %",
      tooltipField: "domestic %",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "international gross (m)",
      headerName: "international gross (m)",
      tooltipField: "international gross (m)",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "% of gross from international",
      headerName: "% of gross from international",
      tooltipField: "% of gross from international",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "worldwide gross",
      headerName: "worldwide gross",
      tooltipField: "worldwide gross",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "worldwide gross (m)",
      headerName: "worldwide gross (m)",
      tooltipField: "worldwide gross (m)",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "year",
      headerName: "year",
      tooltipField: "year",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "decade",
      headerName: "decade",
      tooltipField: "decade",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "source",
      headerName: "source",
      tooltipField: "source",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "budget source",
      headerName: "budget source",
      tooltipField: "budget source",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "force label",
      headerName: "force label",
      tooltipField: "force label",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "horror",
      headerName: "horror",
      tooltipField: "horror",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "genre",
      headerName: "genre",
      tooltipField: "genre",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
    {
      field: "collection",
      headerName: "collection",
      tooltipField: "collection",
      chartDataType: "category",
      filter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      //aggFunc: 'count'
    },
       
    
  ]);

  useEffect(() => {
    const object_URL =
      "https://ms-optimizer.s3.us-east-2.amazonaws.com/Sample/Most+Profitable+Movies+of+All+Time+-+Top+500+Movies.csv";
    fetch(object_URL)
      .then((response) => response.text())
      .then((csvData) => {
        const rows = csvData.split("\n");
        const headers = rows[0].split(",").map((header) => header.trim());
        const rowData = rows
          .slice(1)
          .filter((row) => row.trim() !== "")
          .map((row) => {
            const values = row.split(",").map((value) => value.trim());
            return headers.reduce((rowObject, header, index) => {
              const key = header.replace(/\s+/g, " ");
              console.log(key);
              rowObject[key] = values[index];
              return rowObject;
            }, {});
          });
        setRowData(rowData);
        console.log(rowData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  }, []);

  // Define the Default columns Parameters

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      flex: 1,
      minWidth: 270,
      resizable: true,
      floatingFilter: true,
      enablePivot: true,
      autoHeaderHeight: true,
    };
  }, []);

  // Define the Sidebar Parameters

  const sideBar = {
    toolPanels: [
      {
        id: "columns",
        labelDefault: "Columns",
        labelKey: "columns",
        iconKey: "columns",
        toolPanel: "agColumnsToolPanel",
        minWidth: 225,
        maxWidth: 225,
        width: 225,
      },
      {
        id: "filters",
        labelDefault: "Filters",
        labelKey: "filters",
        iconKey: "filter",
        toolPanel: "agFiltersToolPanel",
        minWidth: 180,
        maxWidth: 400,
        width: 250,
      },
    ],
    position: "right",
    defaultToolPanel: "filters",
  };

  // Define the Statusbar Parameters

  const statusBar = useMemo(() => {
    return {
      statusPanels: [
        { statusPanel: "agTotalRowCountComponent", align: "left" },
        { statusPanel: "agSelectedRowCountComponent", align: "left" },
      ],
    };
  }, []);

  const popupParent = useMemo(() => {
    return document.body;
  }, []);

  return (
    <div
      id="root"
      className="ag-theme-alpine"
      style={{ height: 500, width: 1350 }}
    >
      <h2>MOVIES DATA</h2>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection={"multiple"}
        rowMultiSelectWithClick={true}
        animateRows={animateRows}
        enableCharts={enableCharts}
        enableRangeSelection={enableRangeSelection}
        enableRangeHandle={enableRangeHandle}
        popupParent={popupParent}
        sideBar={sideBar}
        rowDragManaged={true}
        suppressMoveWhenRowDragging={true}
        statusBar={statusBar}
        suppressBrowserResizeObserver={true}
        pivotMode={false}
      />
    </div>
  );
}

export default App;
