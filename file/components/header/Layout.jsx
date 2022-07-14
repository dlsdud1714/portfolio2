import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import styles from "../../styles/css/Navbar.module.css"
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>IYP Portfolio</title>
        <meta name="description" content="Inyoung's portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Acme&family=Assistant:wght@200;300;400;500&family=Bebas+Neue&family=Kelly+Slab&family=Montserrat+Subrayada:wght@400;700&display=swap" rel="stylesheet"/>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <div className={styles.bodyContainer} >
        {children}
      </div>
    </div>
  );
};

export default Layout;
