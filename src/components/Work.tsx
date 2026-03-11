import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Adloom",
    category: "Billboard Ad Platform",
    tools: "React, Python (FastAPI), GoLang",
    image: "/images/placeholder.webp",
    link: "https://www.adloom.ai/",
    description:
      "AI-powered billboard advertising platform for the GCC region, connecting advertisers with prime billboard spaces matched to budgets and target audiences.",
  },
  {
    title: "NPM Packages",
    category: "Open Source",
    tools: "React, TypeScript, NPM",
    image: "/images/placeholder.webp",
    link: "https://www.npmjs.com/~sergiomano",
    description:
      "Published reusable React component libraries and utility packages on NPM, used by developers across multiple projects.",
  },
  {
    title: "Funding Societies",
    category: "Fintech Platform",
    tools: "React, Node.js, PostgreSQL",
    image: "/images/placeholder.webp",
    link: "#",
    description:
      "Contributed to fintech loan management systems, building REST APIs, React dashboards, and CI/CD pipelines for Southeast Asia.",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();
    window.addEventListener("resize", setTranslateX);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      window.removeEventListener("resize", setTranslateX);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    style={{
                      fontSize: "0.75rem",
                      color: "#aaa",
                      marginTop: "0.5rem",
                      display: "inline-block",
                      textDecoration: "underline",
                    }}
                  >
                    View Project ↗
                  </a>
                )}
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
