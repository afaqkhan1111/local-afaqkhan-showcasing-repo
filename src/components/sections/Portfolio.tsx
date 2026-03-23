
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

// Add types for props
interface PortfolioProps {
  filter: string;
  setFilter: (filter: string) => void;
  portfolioRef: React.RefObject<HTMLDivElement>;
  onViewAllProjects: () => void;
}

/** Cover images live in `public/pic/`. Name each file `{title}.png` — same spelling and capitalization as the project `title` below. */
const coverImageForTitle = (title: string) =>
  `/pic/${encodeURIComponent(title)}.png`;

type PortfolioProject = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  /** If set, use this cover instead of `public/pic/{title}.png`. */
  coverImage?: string;
};

const Portfolio: React.FC<PortfolioProps> = ({
  filter,
  setFilter,
  portfolioRef,
  onViewAllProjects,
}) => {
  const projectEntries: PortfolioProject[] = [
    {
      id: 1,
      title: "Farooq Khan Advocate",
      category: "web",
      description: "Professional legal services website for Farooq Khan Advocate in Peshawar, featuring modern design and comprehensive legal practice information.",
      tags: ["React", "Legal Services", "Professional"],
      link: "https://farooq-khan-advocate.vercel.app",
      coverImage: "/lovable-uploads/ad7c14ee-7197-4708-982a-768c934b9297.png",
    },
    {
      id: 2,
      title: "Dribbble",
      category: "mobile",
      description: "A mobile application designed for iOS and Android platforms.",
      tags: ["React Native", "Firebase", "Mobile"],
      link: "https://dribbble.com/search/ios-and-android",
    },
    {
      id: 3,
      title: "withplum",
      category: "design",
      description: "UI/UX design for a fintech startup application.",
      tags: ["Figma", "UI/UX", "Design System"],
      link: "https://withplum.com/",
    },
    {
      id: 4,
      title: "xcessorieshub",
      category: "web",
      description: "An e-commerce platform with advanced features.",
      tags: ["Next.js", "E-commerce", "Stripe"],
      link: "https://xcessorieshub.com/",
    },
    {
      id: 7,
      title: "AI Dashboard",
      category: "web",
      description: "Machine learning dashboard for data visualization and model monitoring.",
      tags: ["Python", "TensorFlow", "D3.js"],
      link: "https://dataforest.ai/services/web-applications/custom-dashboard-development-services",
    },
    {
      id: 8,
      title: "Real Estate Platform",
      category: "web",
      description: "Full-stack real estate platform with property search and listings.",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      link: "https://www.glide.com/",
    },
    {
      id: 9,
      title: "Task Management App",
      category: "mobile",
      description: "Cross-platform productivity app with team collaboration features.",
      tags: ["Flutter", "Dart", "REST API"],
      link: "https://www.manageengine.com/products/service-desk/?network=g&device=c&keyword=task%20management%20tool&campaignid=9198891108&creative=415321639084&matchtype=e&adposition=&placement=&adgroup=93522596312&targetid=kwd-390307003&location=1011084&gad_source=1&gad_campaignid=9198891108&gbraid=0AAAAAChOJfe8ZkUe1mH5UojLAbUh5AXgy&gclid=Cj0KCQjwmqPDBhCAARIsADorxIZUEnlET5JSCFkZY_aFlGPOI31_sFU1oeortV1T6QMkwsej0s4j_2caAuEbEALw_wcB",
    },
    {
      id: 10,
      title: "Food Delivery App",
      category: "mobile",
      description: "Location-based food delivery app with real-time tracking.",
      tags: ["React Native", "Maps API", "Payment"],
      link: "https://www.food.gg/",
    },
    {
      id: 11,
      title: "SaaS Product Design",
      category: "design",
      description: "Complete UI/UX design for a project management SaaS platform.",
      tags: ["Sketch", "Prototyping", "User Research"],
      link: "https://www.visily.ai/",
    },
    {
      id: 12,
      title: "Gaming Interface",
      category: "design",
      description: "UI design for a multiplayer online gaming platform.",
      tags: ["Game UI", "Animation", "User Experience"],
      link: "https://www.behance.net/tags/game-ui",
    },
    {
      id: 13,
      title: "Computer Vision Platform",
      category: "ai",
      description: "Advanced computer vision platform for object detection and image analysis.",
      tags: ["OpenCV", "PyTorch", "Computer Vision"],
      link: "https://www.appen.com/computer-vision",
    },
    {
      id: 14,
      title: "Natural Language Processing API",
      category: "ai",
      description: "Sentiment analysis and text processing API using transformer models.",
      tags: ["BERT", "Transformers", "NLP"],
      link: "https://docs.knowi.com/hc/en-us/articles/360026263994-Natural-Language-Processing-NLP",
    },
    {
      id: 15,
      title: "Predictive Analytics Dashboard",
      category: "ai",
      description: "Real-time predictive analytics for business intelligence and forecasting.",
      tags: ["Machine Learning", "Pandas", "Scikit-learn"],
      link: "https://www.tableau.com/",
    },
    {
      id: 16,
      title: "AI Chatbot Framework",
      category: "ai",
      description: "Conversational AI framework with multi-language support and intent recognition.",
      tags: ["Dialogflow", "TensorFlow", "Chatbot"],
      link: "https://www.thinkstack.ai/",
    },
  ];

  const projects = projectEntries.map(({ coverImage, ...p }) => ({
    ...p,
    image: coverImage ?? coverImageForTitle(p.title),
  }));

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="portfolio"
      className="section-padding bg-secondary/50"
      ref={portfolioRef}
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            My Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Explore my selected projects showcasing my skills and expertise. Each
            project represents a unique challenge and solution that I've crafted
            with careful attention to detail.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All Projects
          </Button>
          <Button
            variant={filter === "web" ? "default" : "outline"}
            onClick={() => setFilter("web")}
            className="rounded-full"
          >
            Web Development
          </Button>
          <Button
            variant={filter === "mobile" ? "default" : "outline"}
            onClick={() => setFilter("mobile")}
            className="rounded-full"
          >
            Mobile Apps
          </Button>
          <Button
            variant={filter === "design" ? "default" : "outline"}
            onClick={() => setFilter("design")}
            className="rounded-full"
          >
            UI/UX Design
          </Button>
          <Button
            variant={filter === "ai" ? "default" : "outline"}
            onClick={() => setFilter("ai")}
            className="rounded-full"
          >
            AI & Machine Learning
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="mb-4"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary/70"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={onViewAllProjects}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
