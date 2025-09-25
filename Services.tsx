import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, BarChart3, MessageSquare, Database, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Custom AI agents that handle customer inquiries, process data, and automate complex decision-making workflows.",
      benefits: ["24/7 availability", "Consistent responses", "Scalable solutions"]
    },
    {
      icon: Workflow,
      title: "Business Process Automation",
      description: "Streamline repetitive tasks and workflows to reduce manual work and increase operational efficiency.",
      benefits: ["Time savings", "Error reduction", "Cost optimization"]
    },
    {
      icon: MessageSquare,
      title: "Chatbot Integration",
      description: "Intelligent chatbots for customer support, lead qualification, and internal team assistance.",
      benefits: ["Instant responses", "Lead capture", "Support automation"]
    },
    {
      icon: Database,
      title: "Data Processing Automation",
      description: "Automated data collection, cleaning, analysis, and reporting systems for informed decision-making.",
      benefits: ["Real-time insights", "Data accuracy", "Automated reports"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track automation performance, ROI metrics, and optimization opportunities for continuous improvement.",
      benefits: ["ROI tracking", "Performance metrics", "Optimization insights"]
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Connect existing tools and platforms to create seamless automated workflows across your tech stack.",
      benefits: ["Unified systems", "Data synchronization", "Workflow efficiency"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Automation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions designed to transform your business operations 
            and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover-elevate" data-testid={`service-card-${index}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            data-testid="button-discuss-project"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}