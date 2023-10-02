import React from "react";

const Experience = () => {
  return (
    <div className="px-10 sm:py-16 sm:px-16 py-20 font-mono" id="work">
      <h1 className="text-[24px] sm:text-[48px] font-bold">
        Personal Projects
      </h1>
      <p className="max-w-[100%] font-semibold text-sm sm:text-lg leading-5">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it.
      </p>
      <div className="flex flex-col sm:flex-row gap-y-[20px] sm:gap-x-[20px] mt-8">
        <div className="relative border-8 p-2 rounded-xl bg-white font-mono">
          <img
            src="/cryptomania.PNG"
            height={400}
            className="object-cover w-full"
            alt="crypto"
          />
          <h1 className="my-2 sm:my-4 text-2xl sm:text-3xl font-bold">
            CryptoMania
          </h1>
          <div>
            <a
              href="https://crypto-mania-rct.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" mr-2 bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
                Live Demo
              </button>
            </a>
            <a
              href="https://github.com/mdmonish/update-raho"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
                Source Code
              </button>
            </a>
          </div>
          <p className="mt-4 mb-8 leading-5">
            A portal that displays complete information of cryptocurrencies,
            latest cryptocurrencies news and statistical data using charts.{" "}
          </p>
          <div className="flex gap-x-2 text-[#65C2FD] absolute bottom-2">
            <p>#reactjs</p>
            <p>#tailwindcss</p>
            <p> #redux</p>
          </div>
        </div>
        <div className="relative border-8 p-2 rounded-xl bg-white ">
          <img
            src="/bankist.PNG"
            height={400}
            className="object-cover w-full"
            alt="bankist"
          />
          <h1 className="my-2 sm:my-4 text-2xl sm:text-3xl font-bold">
            Bankist
          </h1>
          <a
            href="https://bankist-landing-web-page.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mr-2 bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mdmonish/bankist-website"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
              Source Code
            </button>
          </a>
          <p className="mt-4 mb-8 leading-5">
            UI-based landing page which describes about featured, operations and
            user experiences. Guides how to open a new account.
          </p>
          <div className="flex gap-x-2 text-[#65C2FD] absolute bottom-2">
            <p>#html</p>
            <p>#css</p>
            <p>#javascript</p>
          </div>
        </div>
        <div className="relative border-8 p-2 rounded-xl bg-white font-mono">
          <img
            src="/bankist-app.PNG"
            height={400}
            className="object-cover w-full"
            alt="landing page"
          />
          <h1 className="my-2 sm:my-4 text-2xl sm:text-3xl font-bold">
            TouchAccount Application
          </h1>
          <a
            href="https://bankist-market.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mr-2 bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mdmonish/javascript-project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary">
              Source Code
            </button>
          </a>
          <p className="mt-4 mb-8 leading-5">
            A application allows users access their bank account. User can check
            balance, transactions, can apply for a loan, transfer money to other
            users and can close their account.
          </p>
          <div className="flex gap-x-2 text-[#65C2FD] absolute bottom-2">
            <p>#html</p>
            <p>#css</p>
            <p>#javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
