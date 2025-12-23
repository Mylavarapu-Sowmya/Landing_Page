import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Video Editing", href: "#services" },
    { name: "CRM Solutions", href: "#services" },
    { name: "ERP Systems", href: "#services" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="hero-gradient text-hero-foreground">
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                Samm<span className="bg-accent px-1 text-accent-foreground rounded">unat</span>
              </span>
            </a>
            <p className="text-hero-foreground/80 mb-6 max-w-sm">
              We're a creative company that focuses on establishing long-term partnerships with customers, delivering innovative solutions with expertise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-hero-foreground/10 hover:bg-hero-foreground/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-hero-foreground/70 hover:text-hero-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-hero-foreground/70 hover:text-hero-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-hero-foreground/70 mb-4 text-sm">
              Subscribe to get the latest news and updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/50 rounded-full"
              />
              <Button variant="hero" size="icon" className="rounded-full flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hero-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hero-foreground/60 text-sm">
            © {new Date().getFullYear()} Sammunat. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.support.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-hero-foreground/60 hover:text-hero-foreground text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
