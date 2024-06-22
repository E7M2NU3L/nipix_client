import React from 'react';
import './main.css';
import {
    Card,
    Input,
    Checkbox,
    Typography,
    Select,
    Option,
  } from "@material-tailwind/react";
  import { AttachMoney, PhoneAndroid } from "@mui/icons-material";
  import { SiGooglepay, SiPhonepe, SiPaytm } from "react-icons/si";
import { Link } from 'react-router-dom';

const ProfessionStates = [
    {
        value: "Google Pay",
        label: <SiGooglepay />
    },
    {
        value: "Phone Pe",
        label: <SiPhonepe />
    },
    {
        value: "Industrial Expert",
        label: <SiPaytm />
    }
]

const Webinarpayment = () => {
  return (
    <div className='flex justify-center items-center w-full' style={{
        minHeight: "90vh", height: "100%", paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "#D9D9D9"
    }}>
        <Card color="transparent" className='blur-effect' shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Payment
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Choose your Preferrable Payment Method
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                
            <div className="mb-1 flex flex-col gap-6">
                <Typography variant='small' color='blue-gray' className='mt-2 font-normal'>
                    Payment from
                    <Select
                        placeholder="Student"
                        className=" focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                        menuProps={{ className: "h-32" }}
                        required={true}
                    >
                        {ProfessionStates.map((content) => (
                        <Option key={content.value} value={content.value}>
                            <div className="flex items-center gap-x-2">
                                {content.label}
                                {content.value}
                            </div>
                        </Option>
                        ))}
                    </Select>
                </Typography>

                <Typography className='' variant='h6' color='blue-gray'>
                    Enter your UPI ID: 
                <Input label="codakbills@ocicic" size="lg" required={true} />
                </Typography>
            </div>
            <div className='py-4 flex justify-between items-center w-full h-full gap-x-3'>
                <hr className='h-1 w-full bg-gray-800' />
                <Typography variant='p' color='blue-gray' >
                    OR
                </Typography>
                <hr className='h-1 w-full bg-gray-800' />
            </div>

            <div className='justify-center items-center w-full h-full flex flex-col'>
                <Typography variant='small' color='blue-gray' className='mt-2 font-normal'>
                    Payment from <span className='text-blue-800'>
                        Other Payment Methods
                    </span>
                </Typography>
                
                <Typography variant='p' className='py-2'>
                        <Link to="/contacts">
                        <PhoneAndroid />
                        Contact us
                        </Link>
                    </Typography>
            </div>
            <Checkbox
                label={
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                >
                    I agree the Terms and Conditions
                </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
            />

            <button className='px-4 py-2 text-white font-semibold bg-blue-500 ms-[1rem] flex justify-around items-center hover:translate-x-2 hover:scale-110 hover:bg-green-500 transition-all duration-300 ease-in-out'>
                <AttachMoney /> Pay
            </button>
            </form>
        </Card>
    </div>
  )
}

export default Webinarpayment