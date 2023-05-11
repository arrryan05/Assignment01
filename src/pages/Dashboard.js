import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';
import "./Dashboard.scss"

import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsIcon from '@mui/icons-material/Settings';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import SellIcon from '@mui/icons-material/Sell';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {


    const data = [
        {
            name: '',
            Guest: 4000,
            User: 2400,
        },
        {
            name: 'Week 1',
            Guest: 3000,
            User: 1398,
        },
        {
            name: 'Week 2',
            Guest: 2000,
            User: 9800,
        },
        {
            name: 'Week 3',
            Guest: 2780,
            User: 3908,
        },
        {
            name: 'Week 4',
            Guest: 2780,
            User: 3908,
        },
        {
            name: '',
            Guest: 1890,
            User: 4800,

        },
    ];

    const data1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <>
            <div className='home'>

                <div className='sideBar'>
                    <div className='sideInner'>
                        <section>Board.</section>
                        <div><PieChartOutlineIcon fontSize='small' style={{ position: "relative", top: "5px", marginRight: "6px" }} /> Dashboard</div>
                        <div><SellIcon fontSize='small' style={{ position: "relative", top: "5px", marginRight: "6px" }} /> Transactions</div>
                        <div><EventRepeatIcon fontSize='small' style={{ position: "relative", top: "5px", marginRight: "6px" }} /> Schedules</div>
                        <div><PersonPinIcon fontSize='small' style={{ position: "relative", top: "5px", marginRight: "6px" }} /> Users</div>
                        <div><SettingsIcon fontSize='small' style={{ position: "relative", top: "5px", marginRight: "6px" }} /> Settings</div>
                    </div>
                </div>

                <div className='inner'>

                    <div className='headerBar'>
                        <section> Dashboard</section>
                    </div>


                    <div className='boxContainer'>

                        <div className='box1'>
                            <div>
                                <span>Total Revenues</span>
                                <section>$2,129,430</section>
                                <p><DatasetLinkedIcon fontSize='large' /></p>
                            </div>
                        </div>

                        <div className='box2'>
                            <div>
                                <span>Total Transactions</span>
                                <section>1,520</section>
                                <p><SellIcon fontSize='large' /></p>
                            </div>
                        </div>

                        <div className='box3'>
                            <div>
                                <span>Total Likes</span>
                                <section>9,721</section>
                                <p><ThumbUpOffAltIcon fontSize='large' /></p>
                            </div>
                        </div>

                        <div className='box4'>
                            <div>
                                <span>Total Users</span>
                                <section>892</section>
                                <p><PeopleOutlineIcon fontSize='large' /></p>
                            </div>
                        </div>

                    </div>


                    <div className='middleContainer'>
                        <div className='midInner'>

                            <section>Activities</section>
                            <div className='d1'><FiberManualRecordIcon style={{ position: "relative", top: "5px", color: "#8884d8" }} fontSize='small' /> Guest</div>
                            <div className='d2'><FiberManualRecordIcon style={{ position: "relative", top: "5px", color: "#82ca9d" }} fontSize='small' /> User</div>

                            <div className='chart'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" style={{ fontSize: "12px" }} />
                                        <YAxis style={{ fontSize: "12px" }} />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="Guest" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="User" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                        </div>
                    </div>


                    <div className='bottomContainer'>
                        <div className='left'>
                            <div className='innerLeft'>

                                <div className='chartCon'>

                                    <section>Top products</section>

                                    <div className='chart2'>
                                        <ResponsiveContainer>
                                            <PieChart width={400} height={400}>
                                                <Pie
                                                    data={data1}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={renderCustomizedLabel}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {data.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className='textContent'>
                                    <div className='temp'>May - June 2021 <KeyboardArrowDownIcon fontSize='small' style={{ position: "relative", top: "6px" }} /> </div>
                                    <div><FiberManualRecordIcon style={{ position: "relative", top: "5px", color: "#0088FE" }} fontSize='small' /> Basic Tees <br /> <span>40%</span> </div>
                                    <div><FiberManualRecordIcon style={{ position: "relative", top: "5px", color: "#00C49F" }} fontSize='small' /> Custom Short Pants <br /> <span>30%</span></div>
                                    <div><FiberManualRecordIcon style={{ position: "relative", top: "5px", color: "#FFBB28" }} fontSize='small' /> Super Hoodies <br /> <span>30%</span></div>
                                </div>

                            </div>
                        </div>
                        <div className='right'>
                            <div className='rightInner'>
                                <section>Today’s schedule</section>

                                <div className='temp'>See All <KeyboardArrowRightIcon fontSize='small' style={{ position: "relative", top: "5px" }} /> </div>

                                <div className='sheduleCard' style={{ borderColor: "#9BDD7C" }}>
                                    <div>Meeting with suppliers from Kuta Bali</div>
                                    <span>14.00-15.00</span>
                                    <p>at Sunset Road, Kuta, Bali </p>
                                </div>

                                <div className='sheduleCard' style={{ borderColor: "#6972C3" }}>
                                    <div>Check operation at Giga Factory 1</div>
                                    <span>18.00-20.00</span>
                                    <p>at Central Jakarta </p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Home