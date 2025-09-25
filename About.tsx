import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

export default function About() {
  const skills = [
    "AI Agent Development",
    "Workflow Automation", 
    "Business Process Optimization",
    "System Integration",
    "Data Analysis",
    "API Development",
    "n8n Optimization"
  ];

  const achievements = [
    {
      icon: Users,
      number: "30+",
      label: "Clients Served"
    },
    {
      icon: Clock,
      number: "500+",
      label: "Hours Saved Weekly"
    },
    {
      icon: CheckCircle,
      number: "95%",
      label: "Success Rate"
    },
    {
      icon: Award,
      number: "1+",
      label: "Years Experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforming businesses through intelligent automation and AI solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                AI Automation Specialist
              </h3>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  With more than a year of experience in automation and AI implementation, 
                  I've successfully helped many companies reduce manual work and increase efficiency.
                </p>
                
                <p>
                  My approach focuses on understanding your unique business needs and 
                  creating tailored automation solutions that deliver measurable results. 
                  From simple workflow automation to complex AI-powered decision-making 
                  systems, I ensure every solution is designed for scalability and ROI.
                </p>

                <p>
                  When I'm not building automation solutions, I'm staying up-to-date 
                  with the latest AI technologies and helping other businesses discover 
                  the transformative power of intelligent automation.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-4">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      data-testid={`skill-${index}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <Card className="p-8">
                <h4 className="font-semibold mb-6 text-center">Key Achievements</h4>
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div 
                        key={index} 
                        className="text-center"
                        data-testid={`achievement-${index}`}
                      >
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">
                          {achievement.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      Ready to transform your business?
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      Let's automate your success
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}