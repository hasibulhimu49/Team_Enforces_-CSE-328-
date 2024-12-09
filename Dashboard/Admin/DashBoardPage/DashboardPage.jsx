import React from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import TransactionList from './Transactions';
import PerformanceOverview from './PerformanceOverview';
import  RevenueChart  from './RevenueChart';
import PromoCard from './PromoCard';
import SalesReport from './SalesReport';


const DashboardPage = () => {
    return (
        <div className="gap-4 grid grid-flow-row-dense grid-cols-9 grid-rows-1">

            <div className="col-span-7 ">
                <Header />
                <SummaryCards />
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <TransactionList />
                    </div>
                    <div>
                        <RevenueChart />
                        <SalesReport/>
                    </div>
                </div>



            </div>
            <div className="col-span-2 ">
                <PerformanceOverview />
                <PromoCard />
            </div>
            
        </div>
    );
};

export default DashboardPage;
