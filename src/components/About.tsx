import { Code, Database, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Frontend",
      description: "HTML, CSS, JS, React, TypeScript, Tailwind CSS"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend",
      description: "Node.js, Java, PostgreSQL, OracleDB, MySQL, MongoDB"
    },
    // {
    //   icon: <Code className="w-8 h-8 text-primary" />,
    //   title: "DevOps",
    //   description: "Docker, CI/CD"
    // },
    // {
    //   icon: <Smartphone className="w-8 h-8 text-primary" />,
    //   title: "Mobile",
    //   description: "React Native"
    // }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Me chamo Israel de Souza, sou desenvolvedor full-stack com experiência 
            em criar aplicações web modernas e escaláveis. Transformo ideias em 
            soluções digitais completas, desde o conceito até a implementação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="hover:scale-105 transition-smooth shadow-card border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;