import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Experience = () => {
  return (
    <div className="p-16" id="work">
      <h1 className="text-[36px]">Personal Projects</h1>
      <p className="max-w-[100%]">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>
      <div className="flex flex-col sm:flex-row gap-y-[20px] sm:gap-x-[20px] mt-8">
        <div className="relative border p-2 rounded-xl bg-white shadow-3xl">
          <a
            href="https://crypto-mania-rct.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon className="absolute right-9" />
          </a>
          <a
            href="https://github.com/mdmonish/update-raho"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="absolute right-2.5" />
          </a>
          <img
            src="/cryptomania.PNG"
            height={400}
            className="object-cover w-full"
            alt="crypto"
          />
          <h1>CryptoMania</h1>
          <p>
            A portal that displays complete information of cryptocurrencies,
            latest cryptocurrencies news and statistical data using charts.{" "}
          </p>
          <div className="flex gap-x-2 text-violet-500">
            <p>#reactjs</p>
            <p>#tailwind css</p>
            <p> #redux</p>
          </div>
        </div>
        <div className="relative border p-2 rounded-xl bg-white shadow-3xl">
          <a
            href="https://bankist-landing-web-page.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon className="absolute right-9" />
          </a>
          <a
            href="https://github.com/mdmonish/bankist-website"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="absolute right-2.5" />
          </a>
          <img
            src="/bankist.PNG"
            height={400}
            className="object-cover w-full"
            alt="bankist"
          />
          <h1>Bankist Website</h1>
          <p>
            Banking UI-based landing page which describes about featured,
            operations and user experiences.Guides how to open a new account.
          </p>
          <div className="flex gap-x-2 text-violet-500">
            <p>#reactjs</p>
            <p>#tailwind css</p>
            <p> #redux</p>
          </div>
        </div>
        <div className="relative border p-2 rounded-xl bg-white shadow-3xl">
          <a
            href="https://bankist-market.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon className="absolute right-9" />
          </a>
          <a
            href="https://github.com/mdmonish/javascript-project"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="absolute right-2.5" />
          </a>
          <img
            src="/bankist-app.PNG"
            height={400}
            className="object-cover w-full"
            alt="landing page"
          />
          <h1>Bankist Application</h1>
          <p>
            A banking application allows users access their bank account. User
            can check balance, transactions, can apply for a loan, transfer
            money to other users and can close their account.
          </p>
          <div className="flex gap-x-2 text-violet-500">
            <p>#reactjs</p>
            <p>#tailwind css</p>
            <p> #redux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
