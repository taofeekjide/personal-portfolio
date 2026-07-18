import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "idowutaofeek16@gmail.com",
    href: "mailto:idowutaofeek16@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 906 157 5432",
    href: "tel:+2349061575432",
  },
  {
    icon: FaWhatsapp,
    label: "Whatsapp",
    value: "+234 906 157 5432",
    href: "https://wa.me/+2349061575432",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-secondary-foreground max-w-md mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors duration-300"
              >
              <info.icon className="w-12 h-12 mx-auto mb-4" />
              </a>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                {info.label}
              </h3>
              <a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors duration-300"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
