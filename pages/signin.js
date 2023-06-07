import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../styles/signin.module.scss"
import { BiLeftArrowAlt } from "react-icons/bi"
import Link from "next/link"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import LoginInput from "@/components/inputs/loginInput"
import { useState } from "react"
import RoundBtn from "@/components/buttons/roundBtn"
import { getProviders, signIn } from "next-auth/react"
const initailvalues = {
    login_email: "",
    login_password: "",
    name: "",
    email: "",
    password: "",
    conf_password: "",
};

export default function signin( { providers }) {
    const [user, setUser] = useState(initailvalues);
    const { login_email, login_password, name,
        email,
        password,
        conf_password, } = user;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value});
    }

    const loginValidation = Yup.object({
        login_email: Yup.string()
        .required("Email address is required.")
        .email("Please enter a valid email address."),
        login_password: Yup.string().required("Please enter password.")
    })
    const registerValidation = Yup.object ({
        name: Yup.string().required("Please Enter Name.").matches(/^[aA-zZ]/,"Numbers and special characters not allowed."),
        email: Yup.string().required("Enter your email addres.").email("Please enter a valid email address."),
        password: Yup.string().required("Please Enter a password.")
        .min(6, "Password must at least be 6 characters.")
        .max(36, "Password can't be more than 36 characters"),
        conf_password: Yup.string().required("Please confirm your password.")
        .oneOf([Yup.ref("password")], "Password must match.")
    })
  return (
    <>
        <Header />
        <div className={styles.login}>
            <div className={styles.login__container}>
                <div className={styles.login__header}>
                    <div className={styles.back__svg}>
                        <BiLeftArrowAlt />
                    </div>
                    <span>
                        We'd be happy to join us! <Link href="/">Go Store</Link>
                    </span>
                </div>
                <div className={styles.login__form}>
                    <h1>Sign In</h1>
                    <p>
                        Get access to one of the best Eshopping services in the world.
                    </p>
                    <Formik
                    enableReinitialize
                    initialValues={{
                        login_email,
                        login_password,
                    }}
                    validationSchema={loginValidation}
                    >
                        {
                            (form)=> (
                                <Form>
                                    <LoginInput 
                                    type="text"
                                    name="login_email"
                                    icon = "email" 
                                    placeholder="Email"
                                    onChange={handleChange}
                                    />
                                    <LoginInput 
                                    type="password"
                                    name="login_password"
                                    icon = "password" 
                                    placeholder="Password"
                                    onChange={handleChange}
                                    />
                                    <RoundBtn type="submit" text="Sing In"/>
                                    <div className={styles.forgot}>
                                        <Link href="/forgot">Forgot password?</Link>
                                    </div>
                                </Form>
                                )
                        }
                    </Formik>
                    <div className={styles.login__socials}>
                        <span className={styles.or}>Or continue with</span>
                       <div className={styles.login__socials__wrap}>
                       {
                            providers.map((provider) => (
                                <div key={provider.name}>
                                    <button
                                        className={styles.social__btn}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        <img src={`../../icons/${provider.name}.png`}/>
                                        Sing in with {provider.name}
                                    </button>
                                </div>
                            ))
                        }
                       </div>
                    </div>
                </div>
            </div>
            <div className={styles.login__container}>
                <div className={styles.login__form}>
                    <h1>Sign Up</h1>
                    <p>
                        Get access to one of the best Eshopping services in the world.
                    </p>
                    <Formik
                    enableReinitialize
                    initialValues={{
                        name,
                        email,
                        password,
                        conf_password,
                    }}
                    validationSchema={registerValidation}
                    >
                        {
                            (form)=> (
                                <Form>
                                    <LoginInput 
                                    type="text"
                                    name="name"
                                    icon = "user" 
                                    placeholder="Name"
                                    onChange={handleChange}
                                    />
                                    <LoginInput 
                                    type="text"
                                    name="email"
                                    icon = "email" 
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                    />
                                    <LoginInput 
                                    type="password"
                                    name="password"
                                    icon = "password" 
                                    placeholder="Password"
                                    onChange={handleChange}
                                    />
                                    <LoginInput 
                                    type="password"
                                    name="conf_password"
                                    icon = "password" 
                                    placeholder="Comfirm Password"
                                    onChange={handleChange}
                                    />
                                    <RoundBtn type="submit" text="Sing Up"/>
                                </Form>
                                )
                        }
                    </Formik>
                </div>
            </div>
        </div>
        <Footer country="united states"/>
    </>
  )
}

export async function getServerSideProps(context) {
    const providers = Object.values(await getProviders());
    return {
        props: { providers }
    };
}
