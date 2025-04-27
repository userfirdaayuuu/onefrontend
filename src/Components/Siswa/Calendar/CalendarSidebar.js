import React from "react";

const CalendarSidebar = () => {
    return (
        <div className="col-3">
            <div className="d-grid gap-2">
                <button className="btn btn-primary">
                    Crete
                </button>
            </div>
            <div className="m-t-20 text-white">
                <br />
                <div className="my-1 p-2 bg-primary">a</div>
                <div className="my-1 p-2 bg-success">b</div>
                <div className="my-1 p-2 bg-danger">c</div>
            </div>
        </div>
    )
}

export default CalendarSidebar;