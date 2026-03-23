
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Engineer",
    company: "Unique AI Projects",
    period: "2025 - Present",
    location: "Remote",
    description: [
      "Developed machine learning models for predictive analytics and data classification.",
      "Implemented neural networks using TensorFlow and PyTorch for computer vision tasks.",
      "Built end-to-end ML pipelines for data preprocessing, training, and deployment.",
      "Collaborated with cross-functional teams to integrate AI solutions into existing products.",
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS", "Docker"],
  },
  {
    role: "Lead Software Engineer",
    company: "Grow your Business Ltd",
    period: "2022 - 2024",
    location: "Peshawar, Pakistan",
    description: [
      "Led development of scalable web applications serving 100k+ users.",
      "Architected microservices infrastructure reducing system downtime by 40%.",
      "Mentored junior developers and established coding standards for the team.",
      "Optimized database queries and API performance improving response times by 60%.",
    ],
    skills: ["React", "Node.js", "MongoDB", "PostgreSQL", "Express.js", "Redis"],
  },
  {
    role: "Software Engineer",
    company: "Fiverr, Upwork Inc.",
    period: "2021 - Present",
    location: "Worldwide (Freelance)",
    description: [
      "Built responsive web applications using modern JavaScript frameworks.",
      "Integrated third-party APIs and payment gateways for e-commerce platforms.",
      "Participated in agile development processes and sprint planning.",
      "Contributed to open-source projects and maintained high code quality standards.",
    ],
    skills: ["JavaScript", "React", "Vue.js", "MySQL", "Git", "Linux"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title">Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey in software engineering.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-900 text-white border-slate-800 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 w-full max-w-3xl mx-auto">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold">{exp.role}</CardTitle>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 mt-1">
                      <span>{exp.company}</span>
                      <span className="font-semibold">{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-md hidden sm:block">
                     <Briefcase className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
