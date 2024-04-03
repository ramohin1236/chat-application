/* eslint-disable @next/next/no-img-element */
'use client'
import {
    EmailOutlined,
    LockOutlined,
    PersonOutline,
  } from "@mui/icons-material";
  import { useForm } from 'react-hook-form';
import Link from "next/link";
import { useRouter } from "next/navigation";



const Form = ({type}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()


      const router = useRouter();



      const onSubmit = async (data) => {
        if (type === "register") {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          if (res.ok) {
            router.push("/");
          }
    
          if (res.error) {
            toast.error("Something went wrong");
          }
        }
    
        if (type === "login") {
          const res = await signIn("credentials", {
            ...data,
            redirect: false,
          })
    
          if (res.ok) {
            router.push("/chats");
          }
    
          if (res.error) {
            toast.error("Invalid email or password");
          }
        }
      };
    


    return (
        <div className="auth">
        <div className="content">
          <div className="flex gap-2 items-center">
          <img src="logo.svg" alt="logo"  />
          <p className="text-xl font-bold ">Chat-Bot</p>
          </div>
  
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {type === "register" && (
              <div>
                <div className="input">
                  <input
                    defaultValue=""
                    {...register("username", {
                      required: "Username is required",
                      validate: (value) => {
                        if (value.length < 3) {
                          return "Username must be at least 3 characters";
                        }
                      },
                    })}
                    type="text"
                    placeholder="Username"
                    className="input-field"
                  />
                  <PersonOutline sx={{ color: "#737373" }} />
                </div>
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
            )}
  
            <div>
              <div className="input">
                <input
                  defaultValue=""
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className="input-field"
                />
                <EmailOutlined sx={{ color: "#737373" }} />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
  
            <div>
              <div className="input">
                <input
                  defaultValue=""
                  {...register("password", {
                    required: "Password is required",
                    validate: (value) => {
                      if (
                        value.length < 5 ||
                        !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                      ) {
                        return "Password must be at least 5 characters and contain at least one special character";
                      }
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
                <LockOutlined sx={{ color: "#737373" }} />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
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