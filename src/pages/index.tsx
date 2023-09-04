// pages/index.js
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./index.module.css";
// import Reg from "../components/Reg";


const Reg = dynamic(() => import('../components/Reg'), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Add a loading component
});

export default function Home() {
  return (
    <>
      hello
      <Reg />
    </>
  );
}
