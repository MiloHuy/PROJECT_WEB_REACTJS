import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import React, { useState } from 'react'
import Calendar from 'moedim';
import { storeData } from "../../assets/data";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Input,
} from "@material-tailwind/react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import SideBar from "../SideBar";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const TABLE_HEAD = ["Name", "Type", "Gender", ""];


function AdminPage() {
    const [sidebar, setSideBar] = useState(false)
    console.log("Sidebar: ", sidebar)
    const handleOpenSideBar = () => {
        setSideBar(!sidebar)
    }
    const [value, setValue] = useState(new Date())
    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(238, 238, 238, 1)',
                'rgba(238, 238, 238, 1)',
                'rgba(238, 238, 238, 1)',
                'rgba(238, 238, 238, 1)',
                'rgba(238, 238, 238, 1)',
                'rgba(238, 238, 238, 1)',
                'rgba(238, 238, 238, 1)'
            ],
            borderColor: [
                'rgb(238, 238, 238)',
                'rgb(238, 238, 238)',
                'rgb(238, 238, 238)',
                'rgb(238, 238, 238)',
                'rgb(238, 238, 238)',
                'rgb(238, 238, 238)',
                'rgb(238, 238, 238)'
            ],
            borderWidth: 1,
            borderRadius: 4,
            hoverBackgroundColor: '#3D85C6'
        }]
    }
    const options = {
        animations: {
            tension: {
                duration: 1000,
                easing: 'easeInOutBounce',
                from: 1,
                to: 0,
                loop: true
            }
        },
        omaintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
            },
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: 'Roboto Slab',
                    },
                    color: '#000000'
                },

            },
        },
        scales: {
            alignToPixels: true,
            min: 200,
            max: 300,

            y: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                    drawBorder: false,
                },
                ticks: {
                    color: "#444444",
                    font: {
                        size: 14,
                        family: 'Roboto Slab',
                    },
                },
            },
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawBorder: false,
                },
                ticks: {
                    color: "#444444",
                    font: {
                        size: 14,
                        family: 'Roboto Slab',
                    },
                },
            },
        }
    }
    return (
        <div className='grid grid-cols-4 gap-4 mt-4'>
            <SideBar sidebar={sidebar} handleOpenSideBar={handleOpenSideBar} />
            <div className='col-span-2 gap-2 p-2'>
                <Input label="Search" size='lg' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>}
                />
                <div className="relative w-full h-min mt-8 rounded-lg border-2 border-black ">
                    <h5 variant="lead" className='text-black text-lg font-roboto font-bold tracking-normal leading-none p-4'>
                        Semester's Grade
                    </h5>
                    <div style={{ height: '300px' }}>
                        <Bar data={data} options={options} />
                    </div>
                </div>
                <div className='relative w-full h-max mt-4'>
                    <Card className="h-full w-full overflow-scroll">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70 "
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {storeData.slice(0, 4).map(({ name, type, gender }, index) => (
                                    <tr key={name} className="even:bg-blue-gray-50/50">
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal font-roboto">
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal font-roboto">
                                                {type}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal font-roboto">
                                                {gender}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium font-roboto">
                                                Edit
                                            </Typography>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-full h-max mt-2">
                <Calendar value={value} onChange={(d) => setValue(d)} className='relative w-full h-min' />
                <div>
                    <Card className="w-full ">
                        <List>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                    </svg>
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Tania Andrew
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                        Software Engineer
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                    </svg>
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Alexander
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                        Backend Developer
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                    </svg>
                                </ListItemPrefix>
                                <div className='flex flex-col gap-2'>
                                    <Typography variant="h6" color="blue-gray">
                                        Emma Willever
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                        UI/UX Designer
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                    </svg>
                                </ListItemPrefix>
                                <div className='flex flex-col gap-2'>
                                    <Typography variant="h6" color="blue-gray">
                                        Emma Willever
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                        UI/UX Designer
                                    </Typography>
                                </div>
                            </ListItem>
                        </List>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default AdminPage
