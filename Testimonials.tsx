import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Testimonials() {
  // TODO: Remove mock data when connecting to real backend
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart",
      rating: 5,
      text: "The AI automation solution reduced our customer support workload by 90% while maintaining high satisfaction scores. ROI was evident within the first month.",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "GlobalCorp",
      rating: 5,
      text: "Our order processing time went from hours to minutes. The automation system handles complex workflows flawlessly and has scaled with our growth.",
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "CFO, FinanceFlow",
      company: "FinanceFlow",
      rating: 5,
      text: "The financial automation platform eliminated manual errors and saved us $50K+ annually. Professional implementation and ongoing support.",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what business leaders say about 
            the automation solutions I've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`testimonial-card-${index}`}>
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold" data-testid={`client-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join these successful companies and transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-muted-foreground">
              of clients see measurable ROI within 30 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}