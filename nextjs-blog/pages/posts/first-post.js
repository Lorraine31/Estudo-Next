import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Primeiro Post</title>
            </Head>
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnLoad"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }       
            /> */}
            <h1>Primeiro Post</h1>
            <h2>
                <Link href="/">Voltar para a home</Link>
            </h2>
        </Layout>
    );
}