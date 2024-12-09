import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(2024, 0, 1), // Default start date
            endDate: new Date(2024, 4, 31),  // Default end date
            key: 'selection'
        }
    ]);
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (item) => {
        setDateRange([item.selection]);
    };

    return (
        <div className="flex items-center justify-between mb-4  rounded-lg ">
            <h1 className="text-2xl font-black text-black">
                DASHBOARD  
                <br />
                <small className="text-sm font-normal ">
                    This is a tree-selling platform for a life of enjoyment
                </small>
            </h1>

            <div className="relative flex items-center gap-4 rounded-full p-1 ">
                <span className="font-semibold text-gray-800  px-4 py-2 rounded-full shadow-md">
                    {format(dateRange[0].startDate, 'MMMM d, yyyy')} - {format(dateRange[0].endDate, 'MMMM d, yyyy')}
                </span>
                <button 
                    onClick={() => setShowPicker(!showPicker)} 
                    className="flex items-center  hover:bg-green-600 hover:text-white text-black shadow-2xl px-4 py-2 rounded-full 
                    
                   border-gray-300  font-semibold border-2 hover:scale-105 transform transition"
                >
                    <FaCalendarAlt className="text-xl" /> 
                </button>

                {showPicker && (
                    <div className="absolute top-14 right-0 z-50 bg-white text-black rounded-lg shadow-lg p-4 transition-transform transform scale-100 origin-top-right">
                        <DateRangePicker
                            onChange={handleDateChange}
                            moveRangeOnFirstSelection={false}
                            ranges={dateRange}
                            minDate={new Date(2024, 0, 1)}
                            maxDate={new Date(2024, 4, 31)}
                            months={2}
                            direction="horizontal"
                            rangeColors={["#4CAF50"]}
                            showPreview={true}
                        />
                        <button
                            onClick={() => setShowPicker(false)}
                            className="mt-4 w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-2 font-semibold rounded-lg shadow-md hover:scale-105 transform transition"
                        >
                            Apply Date Range
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
