import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import projectsData from '@/lib/allProjects'

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                Todos os Projetos
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore todos os projetos que desenvolvi ao longo da minha carreira,
              demonstrando minhas habilidades em diferentes tecnologias e áreas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:scale-105 transition-smooth shadow-card border-border/50 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader className="p-0 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                    {project.liveUrl && (
    <Button 
      variant="default" 
      size="sm" 
      asChild
      onClick={(e) => e.stopPropagation()}
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 mr-2" />
        Ver Live
      </a>
    </Button>
  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default AllProjects;