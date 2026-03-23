import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/e899f608-bda3-401d-b794-446eab57bd8b.png';
    link.download = 'Afaq_Khan_CV.webp';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <p className="text-accent font-medium">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Afaq Khan</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              <span className="font-semibold block text-2xl text-primary mb-2">Software Engineer & AI/ML Specialist</span>
              Passionate software engineer with 3+ years of experience building innovative solutions. Specialized in AI and Machine Learning with 8 months of hands-on experience in cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary" asChild>
                <a href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button className="btn-secondary" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                className="btn-accent"
                onClick={handleDownloadCV}
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30"></div>
              <div className="relative bg-white rounded-xl p-2 overflow-hidden max-w-md aspect-[4/5]">
                <img
                  src="/lovable-uploads/8ce162d3-27a0-4ec6-a15c-58148a194716.png"
                  alt="Afaq Khan"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
