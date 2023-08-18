import React, { useEffect, useState } from 'react'
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { addUser, getUsers, selectUsers, updateUser } from '../features/Slices/apiSlice'
const TABLE_HEAD = ["ID", "Email", "FirstName", "LastName", "Action"];

const TABLE_ROWS = [

];
function User() {
    // async function getUser() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/user');
    //         console.log("Data : ", response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // axios.get('http://localhost:3000/user')
    //     .then(function (response) {
    //         console.log('Data: ', response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    const userlistData = useSelector(state => selectUsers(state))
    const [email, setEmail] = useState('')
    const [first_name, setFName] = useState('')
    const [last_name, setLName] = useState('')
    console.log("email : ", email)
    console.log("fname : ", first_name)
    console.log("lname : ", last_name)
    const handleChangeEmail = (email) => {
        setEmail(email.target.value)
    }
    const handleChangeFName = (fname) => {
        setFName(fname.target.value)
    }
    const handleChangeLName = (lname) => {
        setLName(lname.target.value)
    }
    const dispath = useDispatch()
    useEffect(() => {
        dispath(getUsers())
    }, [dispath])
    const handleToPost = async (e) => {
        e.preventDefault()
        dispath(addUser({ email, first_name, last_name }))
    }
    const handleToUpdateUser = async (e) => {
        e.preventDefault()
        dispath(updateUser({ email, first_name, last_name }))
        setEmail('')
        setFName('')
        setLName('')
    }

    console.log("User List Data: ", userlistData[0])
    return (
        <div>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {userlistData.map(({ id, email, first_name, last_name, }, index) => {
                            console.log("id: ", id);
                            console.log("email: ", email);
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                            return (
                                <tr key={first_name}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {first_name}
                                        </Typography>
                                    </td>

                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium"
                                        >
                                            {last_name}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <Input value={email} onChange={(e) => handleChangeEmail(e)} label="Email" />
            <Input value={first_name} onChange={(e) => handleChangeFName(e)} label="First Name" />
            <Input value={last_name} onChange={(e) => handleChangeLName(e)} label="Last Name" />
            <Button onClick={(e) => handleToUpdateUser(e)}>Button</Button>
        </div>
    )
}

export default User