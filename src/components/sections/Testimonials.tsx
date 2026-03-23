
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechVision",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Working with Afaq was a game-changer for our company. His expertise in GSSCP PESHAWAR helped us transform our business processes and achieve remarkable growth.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GrowthLabs",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      content: "Afaq's attention to detail and strategic thinking made all the difference in our project. He delivered beyond our expectations and was a pleasure to work with.",
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Product Manager, InnovateX",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      content: "We hired Afaq for a complex project that required specialized knowledge. His problem-solving skills and dedication to quality were outstanding.",
    },
    {
      id: 4,
      name: "Robert Taylor",
      role: "CTO, FutureTech",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      content: "Afaq brought both technical expertise and creative vision to our collaboration. I highly recommend him for any challenging projects in the field.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Here's what my clients and colleagues have to say about working with me. I value each 
            relationship and strive to exceed expectations on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg
                      className="h-12 w-12 text-accent/30"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
