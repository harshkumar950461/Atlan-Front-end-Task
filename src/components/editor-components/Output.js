import { useContext, useState } from "react";
import MainContext from "../../MainContext";
import ColumnDetails from "./ColumnDetails";
import Table from "./Table";
import { CSVLink } from "react-csv";

const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(MainContext);

  const exportData = () => {
    console.log("Data to be exported");
  };

  return (
    <div className='query-results'>
      {queryHistory.outputData.length > 0 ? (
        <>
          <div className='tab-bar'>
            <span
              className={`tabs ${tab === 0 ? "active" : ""} cursor-pointer`}
              onClick={() => setTab(0)}
            >
              Output
            </span>
            <span
              className={`tabs ${tab === 1 ? "active" : ""} cursor-pointer`}
              onClick={() => setTab(1)}
            >
              Table Data
            </span>
          </div>
          <div className='query-details'>
            <p className='text-2'>
              {/* Showing{" "} */}
              <span>
                {tab === 0
                  ? queryHistory.outputData.length
                  : Object.keys(queryHistory.outputData[0]).length}
              </span>{" "}
              rows in Set
              <span style={{ fontSize: "0.9rem" }} className='text-1'>
                {" "}
                (0.03sec)
              </span>
            </p>
            <div className='export-btn'>
              <CSVLink
                data={queryHistory.outputData}
                filename={"dataOutput.csv"}
              >
                <button onClick={exportData}>
                  Export <span className='fa fa-download'></span>
                </button>
              </CSVLink>
            </div>
          </div>
          {tab === 0 ? (
            <Table result={queryHistory.outputData}></Table>
          ) : (
            <ColumnDetails result={queryHistory.outputData} />
          )}
        </>
      ) : (
        <div className='placeholder-text'>
          <span className='fa fa-play'></span>
          <p>Run Your Query&#38; Your Output Will Display Here!</p>
        </div>
      )}
    </div>
  );
};

export default Output;
