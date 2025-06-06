import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaBrain,
  FaCogs,
  FaBolt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiMysql,
  SiExpress,
  SiMqtt,
  SiDocker,
  SiGit,
  SiRsocket,
  SiOpenai,
  SiAwsamplify,
  SiPrisma,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation, MdAssistant } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "express",
          icon: <SiExpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "MQTT",
          icon: <SiMqtt className="w-4 h-4 text-[#FFCC00]" />, // Added MQTT for your real-time communication setup
        },
        {
          name: "WebSockets",
          icon: <SiRsocket className="w-4 h-4 text-[#F39C12]" />, // Added WebSockets for real-time apps
        },
      ],
    },
    {
      icon: Cloud,
      title: "AI & Machine Learning",
      color: "text-indigo-400",
      skills: [
        { name: "OpenAI", icon: <SiOpenai className="w-4 h-4 text-[#FF6611]" /> },
        {
          name: "Machine Learning",
          icon: <FaBrain className="w-4 h-4 text-[#FF9800]" />,
        },
        {
          name: "AI Models",
          icon: <MdAssistant className="w-4 h-4 text-[#FF5722]" />,
        },
      ],
    },    
    {
      icon: Cloud,
      title: "Cloud Computing & Infrastructure",
      color: "text-indigo-400",
      skills: [
        {
          name: "Cloud Computing",
          icon: <SiAwsamplify className="w-4 h-4 text-[#FF9900]" />,
        },
        {
          name: "Docker & Containers",
          icon: <SiDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "Database Management (Prisma)",
          icon: <SiPrisma className="w-4 h-4 text-[#2D3748]" />,
        },
      ],
    },    
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },

        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        {
          name: "GitHub",
          icon: <SiGithub className="w-4 h-4 text-[#181717]" />,
        },
        {
          name: "MQTT",
          icon: <SiMqtt className="w-4 h-4 text-[#FFCC00]" />,
        },
      ],
    },    
    {
      icon: Paintbrush,
      title: "Creative & Technical Innovation",
      color: "text-yellow-400",
      skills: [
        {
          name: "AI Integration",
          icon: <FaBrain className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "Real-Time Applications",
          icon: <FaBolt className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Interactive Experiences",
          icon: <FaCogs className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Full-Stack Development",
          icon: <SiNodedotjs className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    }
    
  ];

  return (
    <main id="#skills" className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
