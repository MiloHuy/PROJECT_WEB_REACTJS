import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux"
import { useState } from "react";
import { login } from "../../features/Slices/authSlice";

function LoginCard() {
    const initialState = {
        name: "",
        password: '',
        image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    }
    const [values, setValues] = useState(initialState)
    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const dispatch = useDispatch()
    const handleSignIn = (user) => {
        const action = login(user)
        dispatch(action)
    }
    return (
        <div className="grid grid-cols-1 items-center justify-items-center h-screen ">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Name" size="lg" type='text' name='name' value={values.name} onChange={handleChangeInput} />
                    <Input label="Password" size="lg" type='password' name='password' value={values.password} onChange={handleChangeInput} />
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth onClick={() => handleSignIn(values)}>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold"
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>

    );
}
export default LoginCard