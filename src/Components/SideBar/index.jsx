import { ChevronDownIcon, ChevronRightIcon, Cog6ToothIcon, InboxIcon, PowerIcon, PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Accordion, AccordionBody, AccordionHeader, Card, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SideBar(props) {
    const { sidebar, handleOpenSideBar } = props
    const navigate = useNavigate()
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const hanldeToMovePage = (numbers) => {
        if (numbers === 1)
            navigate('/dashboard');
        if (numbers === 2)
            navigate('/dashboard/analytics');
        if (numbers === 5)
            navigate('/dashboard/product');
        if (numbers === 6)
            navigate('/user/profile')
    }



    return (
        <div className={`flex  ${sidebar ? '' : 'gap-10'}`}>
            <div className={`relative border-2 rounded-lg ${sidebar
                ? "w-0  h-screen transition-all opacity-100 -translate-x-[300px] ease-out duration-[1000ms]"
                : " w-[300px] h-screen transition-all translate-x-0 ease-in duration-[1000ms] flex justify-start"
                }`}>
                <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <div className="mb-2 flex items-center justify-center gap-4 p-4">
                        <Typography variant="h5" color="blue-gray" className=' cursor-pointer' onClick={handleOpenSideBar}>
                            Sidebar
                        </Typography>
                    </div>
                    <List>
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                                />
                            }
                        >
                            <ListItem className="p-0" selected={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <PresentationChartBarIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal" onClick={() => hanldeToMovePage(1)}>
                                        Dashboard
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem onClick={() => hanldeToMovePage(2)}>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Analytics
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Reporting
                                    </ListItem>
                                    <ListItem onClick={() => hanldeToMovePage(3)}>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Projects
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                />
                            }
                        >
                            <ListItem className="p-0" selected={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <ShoppingBagIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        E-Commerce
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem onClick={() => hanldeToMovePage(4)}>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Orders
                                    </ListItem>
                                    <ListItem onClick={() => hanldeToMovePage(5)}>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Products
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <hr className="my-2 border-blue-gray-50" />
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Inbox
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem onClick={() => hanldeToMovePage(6)}>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                    </List>
                </Card>
            </div>
        </div>
    )
}

export default SideBar