import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);

  // handle single select
  const handleSingleSelect = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  // handle Multi select
  const handleMultiSelect = (getCurrentId) => {
    let copyMultiSelect = [...multiSelected];
    const findIndexOfCurrentId = copyMultiSelect.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiSelect.push(getCurrentId);
    } else {
      copyMultiSelect.splice(findIndexOfCurrentId, 1);
    }
    setMultiSelected(copyMultiSelect);
  };
  return (
    <div>
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        {enableMultiSelect ? "Multi Select ON" : "Multi Select OFF"}
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => {
          return (
            <div
              onClick={() =>
                enableMultiSelect
                  ? handleMultiSelect(dataItem.id)
                  : handleSingleSelect(dataItem.id)
              }
            >
              <h2>
                <span>{dataItem.id}</span> {dataItem.question}
              </h2>
              {enableMultiSelect
                ? multiSelected.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && <div>{dataItem.answer}</div>}
            </div>
          );
        })
      ) : (
        <h3>Data not found</h3>
      )}
    </div>
  );
};

export default Accordion;
