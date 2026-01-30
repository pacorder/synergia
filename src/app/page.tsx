import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Paintbrush,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Sphere from "@/components/sphere";
import { AnimatedSection } from "@/components/animated-section";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "@/components/contact-form";

const valueProps = [
  {
    icon: Zap,
    title: "Velocidad de Entrega",
    description: "Lanzamos tu landing page en días, no semanas. Empleamos un enfoque ágil para que puedas empezar a convertir visitantes en clientes lo antes posible.",
  },
  {
    icon: Paintbrush,
    title: "Diseño Moderno y Atractivo",
    description: "Creamos interfaces visualmente impactantes y optimizadas para la experiencia de usuario, asegurando que tu marca destaque y comunique profesionalismo.",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en Resultados",
    description: "Cada elemento de tu página está diseñado estratégicamente para maximizar la conversión, desde la estructura del contenido hasta las llamadas a la acción.",
  },
  {
    icon: CheckCircle,
    title: "Mínima Fricción para Ti",
    description: "Nos encargamos de todo el proceso técnico y de diseño. Tu solo necesitas contarnos tu visión y nosotros la hacemos realidad con la mínima intervención de tu parte.",
  },
];

const testimonials = [
  {
    name: "Ana Sofía",
    title: "CEO, Startup X",
    quote: "El equipo de Synerg-IA transformó nuestra idea en una landing page increíblemente rápida y efectiva. ¡Vimos un aumento del 40% en leads la primera semana!",
    avatar: "AS",
  },
  {
    name: "Carlos Vera",
    title: "Gerente de Marketing, TechCorp",
    quote: "Profesionalismo, velocidad y un diseño impecable. Synerg-IA superó nuestras expectativas y nos entregó una herramienta de ventas poderosa.",
    avatar: "CV",
  },
  {
    name: "Isabella Rossi",
    title: "Emprendedora",
    quote: "No sabía por dónde empezar. Synerg-IA me guió en todo el proceso y el resultado fue una web que refleja perfectamente mi marca. ¡Totalmente recomendados!",
    avatar: "IR",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 z-10">
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Lleva tu Negocio al Siguiente Nivel, a la Velocidad de la Luz
                  </h1>
                  <p className="max-w-[600px] text-foreground/80 md:text-xl">
                    En Synerg-IA creamos landing pages de alto impacto y velocidad superior. Diseñadas para convertir, listas en tiempo récord.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="#contact">Obtén tu Webapp Rápida</Link>
                  </Button>
                </div>
              </div>
              <div className="absolute top-1/2 left-2/3 md:left-3/4 lg:left-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:relative lg:w-full lg:h-auto lg:top-0 lg:left-0 lg:translate-y-0 z-0 opacity-30 lg:opacity-100">
                <Sphere />
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Propuesta de Valor</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">¿Por qué Synerg-IA?</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Combinamos diseño de vanguardia, tecnología de punta y un proceso ultra-eficiente para darte la ventaja competitiva que necesitas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
              {valueProps.map((prop, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="flex flex-col items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <prop.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Portafolio</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nuestros Proyectos Recientes</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora algunos ejemplos de landing pages que hemos diseñado para clientes que buscaban resultados rápidos y efectivos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
              {PlaceHolderImages.slice(0, 3).map((image, index) => (
                <Card key={image.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">Proyecto {index + 1}</h3>
                      <p className="text-sm text-foreground/80 mt-1">{image.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Lo que dicen nuestros clientes</h2>
              </div>
            </div>
            <Carousel className="w-full max-w-4xl mx-auto mt-12" opts={{loop: true}}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                      <Card className="h-full">
                        <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                          <Avatar className="w-16 h-16 mb-4">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <p className="text-lg italic text-foreground/90">&ldquo;{testimonial.quote}&rdquo;</p>
                          <div className="mt-4 font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-foreground/70">{testimonial.title}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Servicios Adicionales</h2>
              <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Simplificamos aún más tu lanzamiento con servicios complementarios.
              </p>
            </div>
            <div className="mx-auto w-full max-w-3xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">Hosting y Dominio</AccordionTrigger>
                  <AccordionContent className="text-left text-foreground/80">
                    No te preocupes por los detalles técnicos. Ofrecemos paquetes de hosting optimizados para velocidad y seguridad, y te ayudamos con el registro de tu dominio, incluyendo dominios .cl a través de NIC.cl, para que tu presencia online sea sólida desde el primer día.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Hablemos de tu Proyecto</h2>
              <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Completa el formulario y nos pondremos en contacto a la brevedad para transformar tu visión en realidad.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
