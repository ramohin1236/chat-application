/* eslint-disable @next/next/no-img-element */
import {
    EmailOutlined,
    LockOutlined,
    PersonOutline,
  } from "@mui/icons-material";

import Link from "next/link";


const Form = ({type}) => {
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm();
    return (
        <div className="auth ">
           <div className="content">
               <div className="flex items-center gap-2">
               <img src="/logo.svg" alt="logo" />
              <p className="font-bold">Chatbot</p>
               </div>

               {/* form */}
               <form className="form " >
          {type === "register" && (
            <div>
              <div className="input">
                <input
                 
                  placeholder="Username"
                  className="input-field"
                />
                <PersonOutline sx={{ color: "#737373" }} />
              </div>
              {/* {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )} */}
            </div>
          )}

          <div>
            <div className="input">
              <input
               
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "#737373" }} />
            </div>
            {/* {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )} */}
          </div>

          <div>
            <div className="input">
              <input
                defaultValue=""
                
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined sx={{ color: "#737373" }} />
            </div>
            {/* {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )} */}
          </div>

          <button className="button" type="submit">
            {type === "register" ? "Join Free" : "Let's Chat"}
          </button>
        </form>
        {type === "register" ? (
          <Link href="/" className="link">
            <p className="text-center">Already have an account? Sign In Here</p>
          </Link>
        ) : (
          <Link href="/register" className="link">
            <p className="text-center">Don't have an account? Register Here</p>
          </Link>
        )}
           </div>
        </div>
    );
};

export default Form;