export  const onChangeHandler = (e, data, setData) => {
    if (e.target.checked) {
        if (["male", "female", "both"].includes(e.target.id)) {
            data.gender = e.target.id;
        } else {
            data.nation.push(e.target.id);
        }
    } else if (!e.target.checked && e.target.type !== "number") {
        data.nation.splice(data.nation.indexOf(e.target.id), 1);
    }

    if (!isNaN(e.target.value)) {
        data.count = e.target.value;
    }

    setData({ ...data });
}

export const showDataHandler = (showData, setShowData) => {
    if (showData) {
        setShowData(!showData);
    } else {
        setShowData(!showData);
    }
}

export const showGenderDataHandler = (showGenderData, setShowGenderData) => {
    if (showGenderData) {
        setShowGenderData(!showGenderData);
    } else {
        setShowGenderData(!showGenderData);
    }
}