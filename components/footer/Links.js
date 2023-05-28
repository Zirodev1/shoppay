import Link from "next/link";
import styles from "./styles.module.scss"

export default function Links() {
  return (
    <div className={styles.footer__links}>
        {
            links.map((link, i) => (
                <ul>
                    {
                        i === 0 ? (
                            <img src="../../../logo.png" alt="" />
                        ) : (
                            <b>{link.heading}</b>
                        )
                    }
                    {link.links.map((link) => (
                        <li>
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            ))}
    </div>
  )
}

const links = [
    {
        heading: "SHOPPAY",
        links: [
            {
                name: "About Us",
                link: "",
            },
            {
                name: "Contact Us",
                link: "",
            },
            {
                name: "Social Responsiblitly",
                link: "",
            },
            {
                name: "",
                link: "",
            }
        ],
    },
    {
        heading: "HELP & SUPPORT",
        links: [
            {
                name: "Shipping Info",
                link: "",
            },
            {
                name: "Returns",
                link: "",
            },
            {
                name: "How To Order",
                link: "",
            },
            {
                name: "How to Track",
                link: "",
            },
            {
                name: "Size Guide",
                link: "",
            },
        ],
    },
    {
        heading: "CUSTOMER SERVICE",
        links: [
            {
                name: "Customer Service",
                link: "",
            },
            {
                name: "Terms and Conditions",
                link: "",
            },
            {
                name: "Consumers (Transactions)",
                link: "",
            },
            {
                name: "Take our feedback survey",
                link: "",
            },
        ],
    },
];
