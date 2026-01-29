import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./icons/whatsapp-icon";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-foreground/70 max-w-xs">
              Diseño y desarrollo de webapps de alta velocidad para potenciar tu negocio.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto Directo</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hola@synerg-ia.cl" className="hover:text-primary">hola@synerg-ia.cl</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+56912345678" className="hover:text-primary">+56 9 1234 5678</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Síguenos</h4>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-foreground/70 hover:text-primary" prefetch={false}>
                    <WhatsAppIcon className="h-6 w-6" />
                    <span className="sr-only">WhatsApp</span>
                </Link>
                <Link href="#" className="text-foreground/70 hover:text-primary" prefetch={false}>
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-foreground/70 hover:text-primary" prefetch={false}>
                    <InstagramIcon className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Synerg-IA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
