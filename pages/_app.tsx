import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Model from "@/components/Model";
import LoginModal from "@/components/models/LoginModal";
import RegisterModal from "@/components/models/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
