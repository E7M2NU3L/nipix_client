import React from 'react';
import {
    Card,
    Input,
    Checkbox,
    Typography,
    Select,
    Option,
  } from "@material-tailwind/react";
  import { BuildOutlined, ChildCare, Functions, Person } from "@mui/icons-material";
import { Divider } from '@mui/material';


const ProfessionStates = [
    {
        value: "Student",
        label: <ChildCare />
    },
    {
        value: "Teacher",
        label: <Person />
    },
    {
        value: "Industrial Expert",
        label: <BuildOutlined />
    },
    {
        value: "Preferred not to say",
        label: <Functions />
    }
]

const ProfileEdit = () => {

    // handle the inputs
    const [firstName, setfirstName] = React.useState('');
    const [lastName, setLastname] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Qual, setQual] = React.useState('');
    const [profession, setProfession] = React.useState('');

    const handleDescription = (e) => setDescription(e.target.value);
    const handleLastname = (e) => setLastname(e.target.value);
    const handlefirstName = (e) => setfirstName(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleQual = (e) => setQual(e.target.value);
    const handleProfession = (e) => setProfession(e);
    
    // submitting to the backend
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            console.log(
                firstName,
                lastName,
                Description,
                Phone,
                Qual,
                profession
            );
        } catch (error) {
            console.log("Error Occured: "+ error.message);
        }
    }

  return (
    <div className='flex justify-center items-center w-full' style={{
        minHeight: "90vh", height: "100%", paddingTop: "4rem", paddingBottom: "4rem"
    }}>
        <Card color="transparent" className='bg-gray-300 shadow-lg shadow-gray-400 px-[2rem] py-[1.5rem]' shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Update Profile
            </Typography>
            
            <Divider />

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                
                <div className="mb-1 flex flex-col gap-6">
                <Input required={true} label="First Name" size="lg" value={firstName} onChange={handlefirstName}/>
                <Input required={true} label="Last Name" size="lg" value={lastName} onChange={handleLastname}/>
                <Input required={true} label="Bio" size="lg" value={Description} onChange={handleDescription}/>
                <Input required={true} label="Qualification" size="lg" value={Qual} onChange={handleQual} />
                    <Typography variant='small' color='blue-gray' className='mt-2 font-normal'>
                        I am a
                    <Select
                            placeholder="Student"
                            className=" focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                            menuProps={{ className: "h-48" }}
                            value={profession}
                            onChange={handleProfession}
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

                <Divider className='opacity-0' />

                <button className='block bg-blue-500 shadow-md px-4 py-2 rounded-md ps-[1.4rem] text-white font-semibold hover:translate-x-2 hover:bg-green-400 transition-all duration-200 ease-in-out'>
                    Update
                </button>
            </form>
        </Card>
    </div>
  )
}

export default ProfileEdit;