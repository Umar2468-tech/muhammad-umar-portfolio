import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "SKECHERS",
    category: "E-Commerce",
    tools: "JavaScript, React, PHP, Laravel, ReactJs",
    image: "/images/skechers.png",
    link: "https://skechers.com/",
  },
  {
    title: "GemsOrbit",
    category: "E-Commerce",
    tools: "PHP, Laravel, JQuery, HTML, CSS, JavaScript, ReactJs",
    image: "/images/gemsorbit.png",
    link: "https://orbitgems.com/",
  },
  {
    title: "Flight Itinerary For Visa",
    category: "Ticketing",
    tools: "PHP, Laravel, JQuery, HTML, CSS, JavaScript, ReactJs",
    image: "/images/fifv.png",
    link: "https://flightitineraryforvisa.com/",
  },
  {
    title: "Dummy Ticket For Visa",
    category: "Ticketing",
    tools: "PHP, Laravel, JQuery, AlpineJs, HTML, CSS, JavaScript",
    image: "/images/dtfv.png",
    link: "https://dummyticketforvisa.com/",
  },
  {
    title: "Youth Academy",
    category: "Study Project",
    tools: "JavaScript, TypeScript, React, Next.js",
    image: "/images/youth-academy.png",
    link: "https://www.youthacademy.pk/",
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

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
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
                    <div className="link-text">
                      <h4>{project.title}</h4>

                    </div>
                    <p>{project.category}</p>
                    <a href={project.link} className="link" data-cursor="view project" target="_blank">
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
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
