"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import ComingSoon from "@/public/assets/projects/coming-soon-1.jpg"
import InventoryManagement from "@/public/assets/projects/inventory-management-ss.png"
import MessengerApp from "@/public/assets/projects/messenger-app-ss.png"
import RealtimeCodeEditor from "@/public/assets/projects/real-time-code-editor-ss.png"
import SidcupFamilyGolf from "@/public/assets/projects/sidcup-family-golf-ss.png"
import SnakeGame from "@/public/assets/projects/snake-game-ss.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Featured Projects
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>Good code is obvious. Great code is transparent.</div>
              <div>Code is not for philosophy, it&apos;s for life.</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Explore more projects in{" "}
          <Link
            href="https://github.com/abhijivani3001"
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Messenger App",
    description:
      "A sleek, user-friendly messenger app enabling real-time chat with instant notifications, multimedia sharing, and seamless, engaging conversations.",
    techStacks: ["NextJS", "TypeScript", "PusherJS"],
    image: MessengerApp,
    githubURL: "https://github.com/abhijivani3001/messenger-app",
    githubApi: "https://api.github.com/repos/abhijivani3001/messenger-app",
  },
  {
    id: 2,
    title: "SSIP Inventory Management System",
    description:
      "The Inventory Management System is a MERN-based web app designed for real-time inventory tracking, product and supplier management, order handling, and detailed reporting, providing businesses with an efficient and user-friendly solution for inventory control.",
    techStacks: ["MERN", "ChakraUI", "TailwindCSS", "GGGGG"],
    image: InventoryManagement,
    githubURL:
      "https://github.com/abhijivani3001/SSIP-Inventory-Management-2023",
    githubApi:
      "https://api.github.com/repos/abhijivani3001/SSIP-Inventory-Management-2023",
  },
  {
    id: 3,
    title: "Realtime Code Editor",
    description:
      "The Real-time Code Editor is a MERN-based web app that allows multiple users to join the same room and collaborate on the same codebase, featuring real-time updates, syntax highlighting, live code execution, and version control for efficient and interactive coding.",
    techStacks: ["MERN", "Socket.io", "TailwindCSS"],
    image: RealtimeCodeEditor,
    githubURL: "https://github.com/abhijivani3001/realtime-code-editor",
    githubApi:
      "https://api.github.com/repos/abhijivani3001/realtime-code-editor",
  },
  {
    id: 4,
    title: "Sidcup Family Golf Clone",
    description:
      "An engaging web app created with vanilla JavaScript where users can test their luck and intuition by guessing a randomly generated number.",
    techStacks: ["Vanilla JavaScript", "CSS", "HTML"],
    image: SidcupFamilyGolf,
    githubURL: "https://github.com/abhijivani3001/Sidcup_Family_Golf_clone",
    githubApi:
      "https://api.github.com/repos/abhijivani3001/Sidcup_Family_Golf_clone",
  },
  {
    id: 5,
    title: "Snake Game",
    description:
      "The Snake Game is a classic arcade game implemented using JavaFX. Players control a snake to eat food items, growing in length with each item consumed. The game features smooth animations, increasing difficulty, and a good user interface, offering a nostalgic and engaging gaming experience.",
    techStacks: ["Java", "JavaFX"],
    image: SnakeGame,
    githubURL: "https://github.com/abhijivani3001/snakeGame",
    githubApi: "https://api.github.com/repos/abhijivani3001/snakeGame",
  },
  {
    id: 6,
    title: "Multi Monkey",
    description: "Coming Soon...",
    techStacks: ["MERN", "Socket.io", "TypeScript"],
    image: ComingSoon,
    githubURL: "",
    githubApi: "",
  },
]
