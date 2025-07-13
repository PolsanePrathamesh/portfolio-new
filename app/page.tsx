import About from "@/components/About/About";
import ContactUs from "@/components/ContactUs/ContactUs";
import HeroSection from "@/components/HeroSection/HeroSection";
import Project from "@/components/Project/Project";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { TimelineDemo } from "@/components/Timeline/Timeline";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const timelineData = [
    {
      title: "Unico Connect",
      content: (
        <div>
          <div className="flex justify-between items-start mb-2">
            <p className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide">
              Feb 2024 - Present | Software Engineer | Mumbai
            </p>
          </div>
          <div className="border-b border-neutral-700 !mb-4 pb-2"></div>
          <ul className="!space-y-3 list-disc list-inside !mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Next.js
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                React.js
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                TypeScript
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Tailwind CSS
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                React Query
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Redux Toolkit
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Zustand
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                ShadCn
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Storybook
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Jest
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Git
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-xs !px-2 !py-1 rounded-full border border-blue-800/50">
                Webflow
              </span>
            </div>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Spearheaded development of UniSchool SaaS platform (Next.js, Hero
              UI), enabling digital compliance and dashboards; accelerated
              report processes by 65%.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Led Highlands Brain dashboard development with Next.js, React
              Query, Storybook and ShadCn and AI-powered chat, increasing
              productivity by 30% through AI-driven features along with
              Storybook and Jest integration.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Revamped Ebco's legacy website into a responsive e-commerce
              platform with Next.js, MUI, Redux, and CC Avenue, driving a 23%
              revenue increase, single-handedly managing the entire development
              process.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Independently developed a Gmail plugin with mail merge, automated
              follow-ups, and pixel tracking along with direct client
              coordination.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Mentored junior developers, enforcing best coding practices and
              introducing AI integration techniques.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/Brain2.png"
              alt="highlands brain template"
              width={500}
              height={500}
              className="h-16 w-[20rem] rounded-lg object-contain object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/projects/Sergo.png"
              alt="sergo template"
              width={500}
              height={500}
              className="h-16 w-[20rem] rounded-lg object-contain object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/projects/Ebco.png"
              alt="ebco template"
              width={500}
              height={500}
              className="h-16 w-[20rem] rounded-lg object-contain object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/projects/MailBee.png"
              alt="mailbee template"
              width={500}
              height={500}
              className="h-16 w-[20rem] rounded-lg object-contain object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Codearray Technologies Pvt Ltd",
      content: (
        <div>
          <div className="flex justify-between items-start mb-2">
            <p className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide">
              June 2022 - Jan 2024 | Associate Software Engineer | Mumbai
            </p>
          </div>
          <div className="border-b border-neutral-700 !mb-4 pb-2"></div>

          <ul className="!space-y-3 list-disc list-inside !mb-8">
            <div className="flex flex-wrap gap-2 !mb-4">
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Next.js
              </span>
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                React
              </span>
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                GraphQL
              </span>
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Tailwind CSS
              </span>
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Git
              </span>
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Vue.js
              </span>
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Nuxt.js
              </span>
              <span className="bg-purple-900/30 text-purple-400 text-xs !px-2 !py-1 rounded-full border border-purple-800/50">
                Postman
              </span>
            </div>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Architected a SaaS admin portal for CENSE AI using React, GraphQL,
              and Tailwind CSS, improving customer retention by 40%.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Built a WhatsApp UI and payment gateway integration, enhancing
              operational efficiency by 15%.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              Collaborated with UX designers to implement accessible, responsive
              interfaces, reducing user complaints by 15%.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/Cense.png"
              alt="cense template"
              width={500}
              height={500}
              className="h-16 w-[20rem] rounded-lg object-contain object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "PPM VALUE",
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide border-b border-neutral-700 !mb-4 !pb-2">
            Sept 2021 - Jan 2022 | Javascript Developer Intern | Remote
          </p>
          <ul className="space-y-3 list-disc list-inside">
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
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-200">
                Quiz Application:
              </span>{" "}
              Built with React.js featuring dynamic question rendering,
              real-time progress tracking, and timer-based completion with
              auto-submission.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-200">
                Learning Management System:
              </span>{" "}
              Developed a comprehensive LMS with user authentication, role-based
              access control, and interactive course management.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-200">
                Technical Implementation:
              </span>{" "}
              Implemented JWT authentication, protected routes, and integrated
              RESTful APIs with error handling and validation.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-200">
                Technologies:
              </span>{" "}
              React.js, Node.js, MongoDB, Express, JWT, Tailwind CSS, Git
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Emtron Technologies",
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide border-b border-neutral-700 !mb-4 !pb-2">
            Dec 2019 | Web Designer | Mumbai
          </p>
          <ul className="space-y-3 list-disc list-inside">
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
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-200">
                Game Search Application:
              </span>{" "}
              Developed a React-based platform for searching and filtering games
              with real-time API integration.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-200">
                Key Contributions:
              </span>{" "}
              Implemented responsive design, reduced page load time by 40%, and
              integrated external gaming APIs.
            </li>
            <li className="text-sm text-neutral-400 dark:text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-200">
                Technologies:
              </span>{" "}
              React.js, JavaScript (ES6+), Bootstrap, RESTful APIs, Git
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Graduation",
      content: (
        <div>
          <p className="text-lg font-medium text-neutral-300 dark:text-neutral-300 tracking-wide border-b border-neutral-700 !mb-4 !pb-2">
            2018-2022 | Electronics and Telecommunication Engineering
          </p>
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
