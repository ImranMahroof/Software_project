
"use client";

import "./style.css"

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";


  interface LoginFormProps {
    onSignupClick: () => void;
    onLogin: (e: React.FormEvent) => void;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    error: string;
  }
   
  const LoginForm: React.FC<LoginFormProps> = ({
    onSignupClick,
    onLogin,
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
          Login
        </Typography>
        <Typography color="gray" className="flex items-center justify-center mt-5 font-normal">
          Welcome to PaintRouteX!
        </Typography>
        <form onSubmit={onLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
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
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal gap-4"
              >
                
                Remember me
                
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal gap-4"
              >
          <a href="#">Forgot Password?</a>
          </Typography>
          </div>
          <Button className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}

            <a href="#" onClick={onSignupClick} className="font-medium text-gray-900">
              Sign Up
            </a>

          </Typography>
        </form>
      </Card>
      </div>
    );
  }

  export default LoginForm;

