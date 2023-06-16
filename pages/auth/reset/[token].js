import Header from "@/components/header";
import styles from "../../../styles/forgot.module.scss";
import Footer from "@/components/footer";
import Link from "next/link";
import LoginInput from "@/components/inputs/loginInput";
import RoundBtn from "@/components/buttons/roundBtn";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import PropagateLoaderSpinner from "@/components/loaders/propagateLoader";
import { getSession, signIn } from "next-auth/react";
import jwt from "jsonwebtoken";

export default function reset({ user_id }) {
  console.log("user_id", user_id);
  const [password, setPassword] = useState("");
  const [conf_password, setConf_password] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");

  const passwordValidation = Yup.object({
    password: Yup.string()
      .required("Please Enter a password.")
      .min(6, "Password must at least be 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
    conf_password: Yup.string()
      .required("Please confirm your password.")
      .oneOf([Yup.ref("password")], "Password must match."),
  });
  const resetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put("/api/auth/reset", {
        user_id,
        password
      });
      let options = {
        redirect: false,
        email: data.email,
        password: password,
      }
      await signIn("credentials", options);

      setError("");
      setLoading(false);
      Router.push("/")
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  return (
    <>
      {loading && <PropagateLoaderSpinner loading={loading} />}
      <Header country="" />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Reset Password. <Link href="/"> Or Login</Link>
            </span>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              password,
              conf_password,
            }}
            validationSchema={passwordValidation}
            onSubmit={() => {
              resetHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="password"
                  name="password"
                  icon="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LoginInput
                  type="password"
                  name="conf_pasword"
                  icon="password"
                  placeholder="Confirm Passord"
                  onChange={(e) => setConf_password(e.target.value)}
                />

                <RoundBtn type="submit" text="Submit" />
                <div style={{ marginTop: "10px" }}>
                  {error && <span className={styles.error}>{error}</span>}
                  {success && <span className={styles.success}>{success}</span>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer country="" />
    </>
  );
}

export async function getServerSideProps(context) {
    const { query, req } = context;
    const session = await getSession({ req });
    if (session) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
    const token = query.token;
    console.log(token); // New line to log the token
    try {
      const {id: user_id} = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
      return {
        props: {
          user_id,
        },
      };
    } catch(err) {
      console.log(err); // New line to log the error
      return {
        notFound: true,
      };
    }
  }


