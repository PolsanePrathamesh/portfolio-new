import About from "@/components/About/About";
import ContactUs from "@/components/ContactUs/ContactUs";
import HeroSection from "@/components/HeroSection/HeroSection";
import Project from "@/components/Project/Project";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { TimelineDemo } from "@/components/Timeline/Timeline";
import { LinkPreview } from "@/components/ui/link-preview";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const timelineData = [
    {
      title: "Unico Connect",
      content: (
        <div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide">
                Feb 2024 - Present | Software Engineer |
              </div>
            </div>
          </div>
          <div className="border-b border-neutral-700 !mb-4 pb-2"></div>
          <div className="!space-y-4 !mb-2">
            <div className="flex flex-wrap gap-2">
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Next.js
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                React.js
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                TypeScript
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Tailwind CSS
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                React Query
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Redux Toolkit
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Zustand
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                ShadCn
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Storybook
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Jest
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Git
              </div>
              <div className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Webflow
              </div>
            </div>
            <div className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              At Unico Connect, I spearheaded the development of the{" "}
              <LinkPreview
                url="https://brain.edtech.unicoconnect.in/"
                className="border-b-2 border-neutral-300 !px-1 text-white hover:!text-white/80"
              >
                UniSchool SaaS platform
              </LinkPreview>{" "}
              using Next.js and Hero UI, enabling digital compliance and
              dashboards, accelerating report processes by 65%. I led the
              development of the{" "}
              <LinkPreview
                url="https://www.highlandsbrain.com/"
                className="border-b-2 border-neutral-300 !px-1 text-white hover:!text-white/80"
              >
                Highlands Brain dashboard
              </LinkPreview>{" "}
              with Next.js, React Query, Storybook, ShadCn, and an AI-powered
              chat, increasing productivity by 30% through AI-driven features
              and testing integrations. I revamped{" "}
              <LinkPreview
                url="https://ebco.in"
                className="font-bold text-white border-b-2 border-neutral-300 !px-1"
              >
                Ebco
              </LinkPreview>
              's legacy website into a responsive e-commerce platform,{" "}
              <LinkPreview
                url="https://ebco.in"
                className="border-b-2 border-neutral-300 !px-1 text-white hover:!text-white/80"
              >
                Ebco
              </LinkPreview>
              , using Next.js, MUI, Redux, and CC Avenue, driving a 23% revenue
              increase while managing the entire process independently. I also
              developed a{" "}
              <LinkPreview
                url="https://stage.mymailbee.com/"
                className="border-b-2 border-neutral-300 !px-1 text-white hover:!text-white/80"
              >
                Gmail plugin
              </LinkPreview>{" "}
              with mail merge, automated follow-ups, and pixel tracking,
              coordinating directly with clients, and mentored junior developers
              to enforce best coding practices and introduce AI integration
              techniques.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Codearray Technologies Pvt Ltd",
      content: (
        <div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide">
                June 2022 - Jan 2024 | Associate Software Engineer |
              </div>
            </div>
          </div>
          <div className="border-b border-neutral-700 !mb-4 pb-2"></div>
          <div className="!space-y-3 !mb-8">
            <div className="flex flex-wrap gap-2 !mb-4">
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Next.js
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                React
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                GraphQL
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                D3
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Tailwind CSS
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Git
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Vue.js
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Nuxt.js
              </div>
              <div className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Postman
              </div>
            </div>
            <div className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              At Codearray Technologies Pvt Ltd, I architected a SaaS admin
              portal for{" "}
              <LinkPreview
                url="https://cense.ai"
                className="border-b-2 border-neutral-300 !px-1 text-white hover:!text-white/80"
              >
                CENSE AI
              </LinkPreview>{" "}
              using React, GraphQL, and Tailwind CSS, improving customer
              retention by 40%, and built a WhatsApp UI with payment gateway
              integration, enhancing operational efficiency by 15%. I
              collaborated with UX designers to implement accessible, responsive
              interfaces, reducing user complaints by 15%. Revamped{" "}
              <LinkPreview
                url="https://codearray.tech"
                className="border-b-2 border-neutral-300 !px-1 text-white hover:!text-white/80"
              >
                CodeArray
              </LinkPreview>
              's website using Nuxt JS which was a responsive web service
              platform.{" "}
              <LinkPreview
                url="https://retailigence.com"
                className="border-b-2 border-neutral-300 !px-1 text-white hover:!text-white/80"
              >
                RETAILIGENCE
              </LinkPreview>{" "}
              is an advanced AI-powered suite designed to optimize retail
              operations by clustering stores, curating assortments, allocating
              space to categories, and tracking and resolving in-store
              operational issues efficiently.I worked on a dashboard using
              Vue.js, Nuxt.js, JavaScript, and D3, enhancing data visualization
              and operational insights.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "PPM VALUE",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-700 !mb-4 !pb-2">
            <p className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide">
              Sept 2021 - Jan 2022 | Javascript Developer Intern | PPM VALUE
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 !mb-4">
              <span className="bg-red-900/30 text-red-400 text-xs !px-2 !py-1 rounded-full border border-red-800/50">
                Javascript
              </span>
              <span className="bg-red-900/30 text-red-400 text-xs !px-2 !py-1 rounded-full border border-red-800/50">
                HTML
              </span>
              <span className="bg-red-900/30 text-red-400 text-xs !px-2 !py-1 rounded-full border border-red-800/50">
                CSS
              </span>
              <span className="bg-red-900/30 text-red-400 text-xs !px-2 !py-1 rounded-full border border-red-800/50">
                Git
              </span>
              <span className="bg-red-900/30 text-red-400 text-xs !px-2 !py-1 rounded-full border border-red-800/50">
                Bootstrap
              </span>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              At PPM VALUE, I built a with React.js, featuring dynamic question
              rendering, real-time progress tracking, and timer-based completion
              with auto-submission, and developed a with user authentication,
              role-based access control, and interactive course management. I
              implemented technical solutions including JWT authentication,
              protected routes, and integrated RESTful APIs with error handling
              and validation, utilizing technologies like React.js, Node.js,
              MongoDB, Express, JWT, Tailwind CSS, and Git.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Emtron Technologies",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-700 !mb-4 !pb-2">
            <div className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide">
              Dec 2019 | Web Designer |
              <LinkPreview
                url="https://emtronglobal.com"
                className="!text-white hover:!text-white/80 !font-medium !text-lg"
              >
                Emtron Technologies
              </LinkPreview>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 !mb-4">
              <span className="bg-green-900/30 text-green-400 text-xs !px-2 !py-1 rounded-full border border-green-800/50">
                HTML
              </span>
              <span className="bg-green-900/30 text-green-400 text-xs !px-2 !py-1 rounded-full border border-green-800/50">
                CSS
              </span>
              <span className="bg-green-900/30 text-green-400 text-xs !px-2 !py-1 rounded-full border border-green-800/50">
                Git
              </span>
              <span className="bg-green-900/30 text-green-400 text-xs !px-2 !py-1 rounded-full border border-green-800/50">
                PostgresSQL
              </span>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              At Emtron Technologies, I developed a Game Search Application
              using React, enabling searching and filtering games with real-time
              API integration, implementing responsive design, reducing page
              load time by 40%, and integrating external gaming APIs, utilizing
              technologies like React.js, JavaScript (ES6+), Bootstrap, RESTful
              APIs, and Git.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Graduation",
      content: (
        <div>
          <div className="flex items-center gap-2 border-b border-neutral-700 !mb-4 !pb-2">
            <p className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide">
              2018-2022 | Electronics and Telecommunication Engineering |
            </p>
          </div>
          <div className="border-b border-neutral-700 !mb-4 pb-2"></div>
          <ul className="space-y-3 list-disc list-inside">
            <div className="flex flex-wrap gap-2 !mb-4">
              <span className="bg-orange-900/30 text-orange-400 text-xs !px-2 !py-1 rounded-full border border-orange-800/50">
                8.82/10 CGPA
              </span>
            </div>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Completed graduation in Electronics and Telecommunication
              Engineering from SIES Graduate School of Technology (Mumbai
              University).
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <main className="overflow-auto h-full">
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={1.5}
        outerStyle={{
          mixBlendMode: "exclusion",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        innerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <HeroSection />
      <About />
      <Project />
      <TimelineDemo timelineData={timelineData} />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
