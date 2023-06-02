import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../styles/signin.module.scss"
import { BiLeftArrowAlt } from "react-icons/bi"
import Link from "next/link"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import LoginInput from "@/components/inputs/loginInput"
import { useState } from "react"
const initailvalues = {
    login_email: "",
    login_password: "",
};

export default function signin() {
    const [user, setUser] = useState(initailvalues);
    const { login_email, login_password } = user;
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
