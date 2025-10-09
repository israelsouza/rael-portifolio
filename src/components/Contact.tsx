import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "linkedin.com/in/israel-souza-lima",
      href: "https://www.linkedin.com/in/israel-souza-lima/",
      color: "text-blue-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "github.com/israelsouza",
      href: "https://github.com/israelsouza",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto! Estou sempre aberto 
            a novas oportunidades e desafios interessantes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="hover:scale-105 transition-smooth shadow-card border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${method.color}`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href={method.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-auto"
                      >
                        Contatar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 p-6 bg-card rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Pronto para começar?</h3>
                <p className="text-muted-foreground text-sm">Envie um email e vamos discutir seu projeto</p>
              </div>
              <Button variant="hero" asChild>
                <a href="mailto:israellimas@hotmail.com">
                  Enviar Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;