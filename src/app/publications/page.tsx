import React from "react";
import { LiaOrcid } from "react-icons/lia";
import { FaGoogleScholar } from "react-icons/fa6";
import SeoHead from "../Components/SeoHead/comp";

const icons = [
  {
    Icon: LiaOrcid,
    bg: "#A5CD39",
    href: "https://orcid.org/0009-0004-1300-5465",
    title: "ORCID",
  },
  {
    Icon: FaGoogleScholar,
    bg: "#4D90FE",
    href: "https://scholar.google.com/citations?user=OMF3bdAAAAAJ&hl=en", // Update if you have your personal profile link
    title: "Google Scholar",
  },
];

export default function Publications() {
  return (
    <>
      <SeoHead
        title="Publications | Bhavesh Mukheja | AI Researcher & Full Stack Developer"
        description="You can see what I am upto in research field currently."
        url="https://bhavesh-portfolio-self.vercel.app/publications"
        image="public/assets/projects/portfolio.png"
      />
      <main>
        <div className="absolute top-0 w-screen h-screen bg-[url('/assets/publication.jpg')] bg-cover bg-center">
          {/* Overlay */}
          <div className="absolute h-screen w-full inset-0 bg-gray-200/15 z-10" />

          {/* Main Card */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[50%] h-[80%] bg-white/90 z-20 rounded-xl border-2 p-6 md:p-12 flex flex-col justify-between shadow-xl">
            <h1 className="font-tang text-4xl md:text-6xl font-bold text-center">
              Publications
            </h1>

            <div className="space-y-6 overflow-y-auto pr-2">
              {/* Abstracts Section */}
              <div>
                <p className="text-lg font-semibold mb-2">
                  Abstracts and Contributed Papers
                </p>
                <ul className="text-sm list-decimal list-inside space-y-2">
                  <li>
                    Moskowitz, I., Ng, J., Urry, C., Ghosh, A., Das, M.,
                    Bhattacharya, A., Mukheja, B., Tian, C., Mingarelli, C., &
                    Casey-Clyde, A. (2025).{" "}
                    <a
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://baas.aas.org/pub/2025n2i355p03/release/1"
                    >
                      Here be DRAGONs: A Deep Learning Approach to Discover and
                      Study Dual AGN and Galaxy Merger Candidates in Large Sky
                      Survey Fields
                    </a>
                    . Bulletin of the AAS, 57(2).{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                      href="https://doi.org/10.3847/25c2cfeb.c924491d"
                    >
                      https://doi.org/10.3847/25c2cfeb.c924491d
                    </a>
                  </li>
                </ul>
              </div>

              {/* Ongoing Project Section */}
              <div>
                <p className="text-lg font-semibold mb-2">Ongoing Project</p>
                <ul className="text-sm list-decimal list-inside">
                  <li>
                    Detecting Dual Nuclei in closely merging Galaxies using
                    Image Processing and Machine Learning Techniques over SDSS
                    Data.
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <ul className="flex justify-center gap-4 mt-8">
              {icons.map(({ Icon, bg, href, title }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fancy-button inline-flex items-center gap-2 px-4 py-2 rounded-md border-2 font-semibold transition-all duration-300"
                    style={
                      {
                        "--btn-hover-bg": bg,
                      } as React.CSSProperties
                    }
                  >
                    {title} <Icon className="text-xl" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
