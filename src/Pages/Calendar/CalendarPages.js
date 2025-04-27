import React from "react";
import './CalendarPages.css';
import Calendar from '../../Components/Siswa/Calendar/Calendar';
import CalendarSidebar from '../../Components/Siswa/Calendar/CalendarSidebar';

const CalendarPages = () => {
    return (
        <>
        <div className="container-fluid box-content">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <CalendarSidebar />
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CalendarPages;