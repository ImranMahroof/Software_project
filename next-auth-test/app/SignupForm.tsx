


"use client";

import React from "react";
import "./style.css"

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

interface SignupFormProps {
  onLoginClick: () => void;
  onSubmit: (e: React.FormEvent) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const SignupForm: React.FC<SignupFormProps> = ({
  onLoginClick,
  onSubmit,
  setName,
  setEmail,
  setPassword,
  error,
}) => {
  return (
    <div className='flex items-center justify-center h-screen'>
       <Card style={{padding:"10px" , width:"400px" }} color="transparent" shadow={true}>
        <div className='flex items-center justify-center'>
          <img src='logowh.jpg' style={{width:"70px", marginBottom:"5px"}}></img>
        </div>
        
        <Typography variant="h3" color="blue-gray" className='flex items-center justify-center mb-8'>
          Sign up
        </Typography>
        <Typography color="gray" className="flex items-center justify-center mt-5 font-normal">
          Get started with PaintRouteX!
        </Typography>
        <form onSubmit={onSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="sm"
              placeholder="john dave"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={e => setName(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="sm"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={e => setEmail(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="sm"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal gap-4"
              >
                
                I agree to the terms & conditions
                
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          
          <Button className="mt-6" fullWidth>
            Sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}

            <a href="#" onClick={onLoginClick} className="font-medium text-gray-900">
              Sign in
            </a>

          </Typography>
        </form>
      </Card>
      </div>
  );
};

export default SignupForm;



