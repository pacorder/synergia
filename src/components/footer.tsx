import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "./logo";

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
                <a href="mailto:leaneng@proton.me" className="hover:text-primary">leaneng@proton.me</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Síguenos</h4>
            <div className="flex items-center gap-4">
                <Link href="https://www.linkedin.com/company/synerg-ia/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary" prefetch={false}>
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
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
