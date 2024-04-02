import React, { useState } from 'react'
import { FaUser, FaBook, FaClipboardList, FaComments } from 'react-icons/fa';
import { Box, Text, Flex } from "@chakra-ui/react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, BarChart, Bar } from 'recharts';
import EducatorSidebar from './EducatorSidebar'
import styles from './EducatorProfile.module.css'


const ChartDashboard = () => {
    // Initial chart data
    // const pdata = [
    //     {
    //         name: 'Introduction to Microsoft Excel',
    //         difficulty:'Intermidiate'
    //         // student: 13,
    //         // fees: 10
    //     },
    //     {
    //         name: 'Intro To methodology',
    //         difficulty:'Beginner'
    //         // student: 15,
    //         // fees: 12
    //     },
    //     // {
    //     //     name: 'PHP',
    //     //     student: 5,
    //     //     fees: 10
    //     // },
    //     // {
    //     //     name: 'Java',
    //     //     student: 10,
    //     //     fees: 5
    //     // },
    //     // {
    //     //     name: 'C#',
    //     //     student: 9,
    //     //     fees: 4
    //     // },
    //     // {
    //     //     name: 'C++',
    //     //     student: 10,
    //     //     fees: 8
    //     // },
    // ];


    const pdata = [
        {
            name: 'Introduction to Microsoft Excel',
            difficulty:'Intermidiate',
            student: 20
        },
        {
            name: 'Intro To methodology',
            difficulty:'Beginner',
            student: 15
        },

        {
            name: 'Introduction to Microsoft Excel',
            difficulty:'Intermidiate',
            student: 5
        },
        {
            name: 'Intro To methodology',
            difficulty:'Beginner',
            student: 40
        },
    ];
    
    return (
        <>
            {/* <h1 className="chart-heading">Line Chart</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer> */}

            <h1 className="chart-heading">Area Chart</h1>
            <ResponsiveContainer width="50%" aspect={3}>
                <AreaChart data={pdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="linear" dataKey="student" stroke="#E4B49D" fill="#E4B49D" />
                </AreaChart>
            </ResponsiveContainer>

            {/* <h1 className="chart-heading">Bar Chart</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart data={pdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="student" fill="#8884d8" />
                    <Bar dataKey="fees" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer> */}
        </>
    );
}

const data = [
    { label: "Total Users", value: 100, icon: FaUser },
    { label: "Total Courses", value: 50, icon: FaBook },
    { label: "Total Tasks", value: 20, icon: FaClipboardList },
    { label: "Total Comments", value: 30, icon: FaComments },
];



const EducatorProfile = () => {
    return (
        <div className='d-flex'>
            <div style={{ width: '10%' }}>
                <EducatorSidebar />
            </div>
            <div style={{ width: '90%' }}>
                <Box className={styles.dashboard}>
                    {data.map((item, index) => (
                        <Box
                            key={index}
                            className={styles.card}
                        >
                            {item.icon && <item.icon className={styles.icon} />}
                            <Box>
                                <Text className={styles.label}>{item.label}</Text>
                                <Text className={styles.value}>{item.value}</Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <ChartDashboard />
            </div>
        </div>
    )
}

export default EducatorProfile
