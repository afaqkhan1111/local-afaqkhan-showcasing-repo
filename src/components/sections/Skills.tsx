
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Code, PenTool, Smartphone, Database, Cloud, Brain, Users, Presentation, ClipboardList, Lightbulb, Zap } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Web Development", percentage: 90, icon: <Code className="h-5 w-5 text-primary" /> },
    { name: "UI/UX Design", percentage: 85, icon: <PenTool className="h-5 w-5 text-primary" /> },
    { name: "Mobile Development", percentage: 80, icon: <Smartphone className="h-5 w-5 text-primary" /> },
    { name: "Database Management", percentage: 75, icon: <Database className="h-5 w-5 text-primary" /> },
    { name: "Cloud Services", percentage: 85, icon: <Cloud className="h-5 w-5 text-primary" /> },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Brain className="h-5 w-5 text-accent" /> },
    { name: "Communication", icon: <Users className="h-5 w-5 text-accent" /> },
    { name: "Team Leadership", icon: <Presentation className="h-5 w-5 text-accent" /> },
    { name: "Project Management", icon: <ClipboardList className="h-5 w-5 text-accent" /> },
    { name: "Critical Thinking", icon: <Lightbulb className="h-5 w-5 text-accent" /> },
    { name: "Adaptability", icon: <Zap className="h-5 w-5 text-accent" /> },
  ];

  const tools = [
    { name: "Adobe Creative Suite", level: "Expert" },
    { name: "Visual Studio Code", level: "Expert" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Figma", level: "Expert" },
    { name: "Docker", level: "Intermediate" },
    { name: "AWS", level: "Advanced" },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Here's an overview of my technical capabilities, tools I work with, and soft skills
            that enable me to deliver successful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Technical Skills Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-secondary" />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg flex items-center gap-3">
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Tools & Technologies</h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <span className="font-medium">{tool.name}</span>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    tool.level === "Expert" 
                      ? "bg-accent/20 text-accent" 
                      : tool.level === "Advanced" 
                        ? "bg-primary/20 text-primary" 
                        : "bg-gray-200 text-gray-700"
                  }`}>
                    {tool.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
