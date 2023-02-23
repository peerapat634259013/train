import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";

function App() {
  const [runNumber, setRunNumber] = useState(0);

  //useEffect(() => {
  //  if (runNumber === 10) {
  //    alert("Success!"); ถ้าเอาalert ไว้ข้างในต้องผ่านเงื่อนไขก่อนถึงทำงาน ถ้าเอาไว้ข้างนอกจะแสดงเลย
  //  }
  //});
  useEffect(() => {
    //เข้าฟังชั่น auto เมื่อเปิดหน้า
    if (runNumber <= 10) {
      setTimeout(() => {
        let num = runNumber;
        num += 1;
        setRunNumber(num);
      }, 1000);
    } //else if (runNumber >= 10) {
    //alert('Time Out');
    //}
  }, [runNumber]);

  function plus() {
    let num = runNumber;
    num += 1;
    setRunNumber(num);
  }

  function minus() {
    let num = runNumber;
    num -= 1;
    setRunNumber(num);
  }

  return (
    <div className={"mt-5 fs-1 " + (runNumber >= 10 ? "bg-success" : "")}>
      {runNumber >= 10 ? <p className="text-center fs-2">Time Out</p> : null}
      <ShowData runNumber={runNumber} name="เจ"/>
      <div className="row">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              plus();
            }}
          >
            Plus
          </button>
        </div>
        <div className="col-3 ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              minus();
            }}
          >
            minus
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
