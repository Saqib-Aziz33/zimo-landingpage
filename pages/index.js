import Head from "next/head";
import Section from "../components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zimo Group</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main role="main">
        {/* section 1 */}
        <Section targetId="section2">
          <div className="container relative flex min-h-screen items-center py-16">
            <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-widest">
              zimo group
            </h1>
            <div className="hero-img-wrapper">
              {/* eslint-disable-next-line */}
              <img src="/assets/zimo-black.png" alt="" />
            </div>
          </div>
        </Section>

        {/* section 2 */}
        <Section
          targetId="section3"
          id="section2"
          className="bg-black text-white"
          invertedArrow={true}
        >
          <div className="flex flex-col justify-center gap-8 md:flex-row items-center min-h-screen py-16">
            <Image
              src="/assets/logo2-white.png"
              height={54}
              width={200}
              alt=""
            />
            <div className="text-center mx-auto text-[30px]">
              <p>We are the global platform.</p>
              <p className="mt-3">
                Services in over one hundred and twenty countries.
              </p>
            </div>
          </div>
        </Section>

        {/* section 3 */}
        <Section targetId="section4" id="section3">
          <div className="flex min-h-screen flex-col justify-center py-8">
            <p className="text-[30px] text-center">REVOLUTIONARY</p>

            <div className="flex flex-col md:flex-row my-8 gap-8 justify-around items-center">
              {/* eslint-disable-next-line */}
              <img
                src="/assets/zimo-logo.png"
                alt="zimo"
                className="w-52 md:w-72"
              />
              <div
                style={{ border: "1px solid #BE9F56" }}
                className="h-0 w-52 md:h-[250px] md:w-0"
              />
              {/* eslint-disable-next-line */}
              <img
                src="/assets/zimo-pro.png"
                alt="zimo pro"
                className="w-52 md:w-72"
              />
            </div>

            <p className="text-center text-[30px]">
              {"The only platform of it's kind in the world."}
            </p>
          </div>
        </Section>

        {/* section 4 */}
        <Section
          targetId="section5"
          id="section4"
          className="bg-black"
          invertedArrow={true}
        >
          <div className="min-h-screen py-8">
            <div className="forground-text">
              {/* eslint-disable-next-line */}
              <img src="/assets/section4-texts.png" alt="" />
            </div>

            {/* background img */}
            {/* eslint-disable-next-line */}
            <img
              src="/assets/zimo-group.png"
              alt=""
              className="absolute blur-sm lg:blur-md"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </Section>
      </main>
    </>
  );
}
