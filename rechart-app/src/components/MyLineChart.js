import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, 
    ResponsiveContainer, CartesianGrid } from 'recharts';
import { sales } from '../data/sales';
import '../styles/styles.css';

const MyLineChart =()=>{
    return (
        <ResponsiveContainer className="contenedor-responsive">
            <LineChart data={sales}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="month">
                </XAxis>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line dataKey="amount" type="monotone" stroke="#8884d8" 
                    activeDot={{r:8}}/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;