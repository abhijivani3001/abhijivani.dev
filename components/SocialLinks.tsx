import { ArrowRightIcon } from "@radix-ui/react-icons"
import { ArrowDown2, Mouse } from "iconsax-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <>
      <div className="fixed z-10 right-4 bottom-[5%] md:bottom-[20%]">
        <div className="flex flex-col gap-6 items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.id}
              title={link.title}
              target="_blank"
              aria-label={link.title}
              rel="noopener noreferrer"
              href={link.link}
              className="scale-110 rounded link-outline"
            >
              {link.svg}
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 group flex flex-col gap-2 items-center left-4">
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          style={{
            writingMode: "vertical-lr",
          }}
          aria-label="blog"
          className="flex text-xs group-hover:text-accentColor font-light tracking-[0.3em] items-center gap-2 dark:text-gray-400"
        >
          Contact me
        </Link>
        <div className="h-24 w-[0.4px] bg-gray-400 group-hover:bg-accentColor"></div>
      </div>

      <div className="hidden md:block absolute bottom-4 right-4">
        <Link
          href="#project"
          aria-label="project"
          className="flex items-center gap-2 dark:text-gray-400"
        >
          <span className="text-sm tracking-widest">View Project</span>
          <ArrowRightIcon />
        </Link>
      </div>

      <Link
        href="#about"
        aria-label="about"
        className="absolute animate-bounce text-gray-600 dark:text-gray-400 hover:text-accentColor cursor-pointer bottom-4 left-[50%] -translate-x-1/2"
      >
        <div className="flex flex-col gap-1 items-center">
          <Mouse size={24} />
          <ArrowDown2 size={14} />
        </div>
      </Link>
    </>
  )
}

const socialLinks = [
  {
    id: 1,
    title: "Abhi Jivani's GitHub Profile",
    link: "https://github.com/abhijivani3001",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-gray-400 hover:fill-accentColor dark:hover:fill-accentColor"
      >
        <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Abhi Jivani's Twitter Profile",
    link: "https://twitter.com/abhijivani3001",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 30 30"
        className="dark:fill-gray-400 hover:fill-accentColor dark:hover:fill-accentColor"
      >
        <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Abhi Jivani's LinkedIn Profile",
    link: "https://www.linkedin.com/in/abhijivani/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark:fill-gray-400 hover:fill-accentColor dark:hover:fill-accentColor"
      >
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Check Abhi Jivani on Dev.to",
    link: "https://dev.to/abhijivani3001",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-gray-400 hover:fill-accentColor dark:hover:fill-accentColor"
      >
        <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Check Abhi Jivani's Leetcode Profile",
    link: "https://leetcode.com/u/abhijivani3001/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 26 26"
        className="dark:fill-gray-400 hover:fill-accentColor dark:hover:fill-accentColor"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>LeetCode icon</title>
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path>
        </g>
      </svg>
    ),
  },
]
