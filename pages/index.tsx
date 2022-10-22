import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from "../components/footer"
import Header from "../components/header"
import Profile from "../components/profile"
import ProjectPreview from "../components/project_preview"
import Layout from "../components/layout"

const Home: NextPage = () => {
  return (
  <Layout>
    <div className="overflow-hidden flex flex-col justify-center items-center">
      <div className="border-8 border-indigo-500 rounded-full flex flex-col justify-center items-center">
      <Image src={"/profilepicture.png"} layout="intrinsic" className="rounded-full" width={300} height={300}/>
    </div> </div>
  <div className="text-slate-700 flex flex-col gap-4"> 
    <Header />
    <Profile />
    <div>
      <ProjectPreview />
    </div>
    <Footer />
  </div>  
  </Layout>
  );
};

export default Home
