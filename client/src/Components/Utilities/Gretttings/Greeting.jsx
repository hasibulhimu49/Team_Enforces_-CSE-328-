import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Greeting = () => {
    const {user} = useAuth();
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

    return (
        <div className="flex items-center gap-3">
            {user ? (
                <div>
                    <p className='text-sm text-slate-500'>{greeting},</p>
                    <p className="text-xl  font-semibold">
                      {user?.displayName || 'Guest'}
                </p>
                </div>
            ) : (
                <div>
                <p className='text-sm text-slate-500'>{greeting},</p>
                <p className="text-lg  font-semibold">
                  {'Guest'}
            </p>
          
            </div>    
            )}
        </div>
    );
};

export default Greeting;
