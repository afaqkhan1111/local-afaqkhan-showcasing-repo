import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Code, Brain, Rocket, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  const features = [{
    icon: <Code className="h-8 w-8 text-blue-400" />,
    title: "3+ Years Experience",
    description: "Proven track record in software development across various technologies and domains."
  }, {
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    title: "AI/ML Specialist",
    description: "8 months of focused experience in artificial intelligence and machine learning projects."
  }, {
    icon: <Rocket className="h-8 w-8 text-green-400" />,
    title: "Innovation Focused",
    description: "Passionate about building cutting-edge solutions that make a real impact."
  }, {
    icon: <Award className="h-8 w-8 text-yellow-400" />,
    title: "Quality Driven",
    description: "Committed to writing clean, maintainable code and following best practices."
  }];
  return <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => <Card key={index} className="bg-slate-900 text-white border-slate-800 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <CardHeader className="flex flex-col items-start space-y-4">
                  {feature.icon}
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate software engineer with over 3 years of experience
              in building robust, scalable applications. My journey began with
              traditional software development, and I've recently expanded into
              the exciting world of artificial intelligence and machine
              learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the past 8 months, I've delved deep into AI/ML technologies,
              working on projects that leverage machine learning algorithms,
              neural networks, and data analysis to solve real-world problems. I
              believe in the power of technology to transform industries and
              improve lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest tech
              trends, contributing to open-source projects, or learning about
              emerging technologies in the AI space.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary flex items-center" asChild>
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;