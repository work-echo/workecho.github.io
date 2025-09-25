import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react";
import dashboardImage from "@assets/generated_images/Automation_dashboard_project_example_ba1362ad.png";
import chatbotImage from "@assets/generated_images/AI_chatbot_workflow_diagram_9af576df.png";
import processImage from "@assets/generated_images/Business_process_automation_flowchart_09fc7d00.png";

export default function Portfolio() {
  // TODO: Remove mock data when connecting to real backend
  const projects = [
    {
      title: "LinkedIn Automation System",
      description: "Automated LinkedIn content system that researches on the given ideas, writes posts with media, and auto-publishes to grow your influence.",
      image: dashboardImage,
      tags: ["Workflow Automation", "Personal Brand", "API Integration"],
      metrics: [
        { label: "Time Saved", value: "85%", icon: Clock },
        { label: "Profile Engagement", value: "+45%", icon: TrendingUp },
        { label: "Followers Gained", value: "10K+", icon: Users }
      ],
      link: "#"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent chatbot handling 90% of customer inquiries automatically, with seamless handoff to human agents for complex issues.",
      image: chatbotImage,
      tags: ["AI Chatbot", "Customer Support", "NLP"],
      metrics: [
        { label: "Automation Rate", value: "90%", icon: TrendingUp },
        { label: "Response Time", value: "<1min", icon: Clock },
        { label: "User Satisfaction", value: "4.8/5", icon: Users }
      ],
      link: "#"
    },
    {
      title: "Financial Process Automation",
      description: "Comprehensive automation of invoice processing, expense tracking, and financial reporting for a growing fintech company.",
      image: processImage,
      tags: ["Finance", "Document Processing", "Reporting"],
      metrics: [
        { label: "Processing Speed", value: "95%", icon: Clock },
        { label: "Error Reduction", value: "99%", icon: TrendingUp },
        { label: "Cost Savings", value: "$50K+", icon: Users }
      ],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real automation solutions delivering measurable business impact. 
            See how I've helped companies transform their operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`project-card-${index}`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={idx} className="text-center">
                          <IconComponent className="h-5 w-5 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto"
                    onClick={() => console.log(`Viewing project: ${project.title}`)}
                    data-testid={`button-view-project-${index}`}
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to see similar results in your business?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-start-project"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}