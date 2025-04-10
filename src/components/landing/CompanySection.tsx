
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CompanySectionProps {
  id: string;
  spirit: "elephant" | "bee" | "leopard" | "hawk";
  title: string;
  headline: string;
  description: string;
  callToAction: string;
  colorClass: string;
  textColorClass: string;
  buttonColorClass: string;
  order: "normal" | "reverse";
}

const CompanySection: React.FC<CompanySectionProps> = ({
  id,
  spirit,
  title,
  headline,
  description,
  callToAction,
  colorClass,
  textColorClass,
  buttonColorClass,
  order
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getSpiritImage = () => {
    switch (spirit) {
      case "elephant":
        return "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1632&auto=format&fit=crop";
      case "bee":
        return "https://images.unsplash.com/photo-1568526381923-caf3fd520382?q=80&w=1374&auto=format&fit=crop";
      case "leopard":
        return "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1471&auto=format&fit=crop";
      case "hawk":
        return "https://images.unsplash.com/photo-1629385701020-973ac53fae53?q=80&w=1471&auto=format&fit=crop";
      default:
        return "";
    }
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-20 opacity-0",
        colorClass
      )}
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-12",
          order === "reverse" && "md:flex-row-reverse"
        )}>
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
              <img
                src={getSpiritImage()}
                alt={`${spirit} spirit`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className={cn("text-sm font-bold uppercase tracking-wider mb-3", textColorClass)}>
              {title}
            </h3>
            <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", textColorClass)}>
              {headline}
            </h2>
            <p className={cn("text-lg mb-8", textColorClass)}>
              {description}
            </p>
            <Button className={cn("flex items-center gap-2", buttonColorClass)}>
              {callToAction} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
