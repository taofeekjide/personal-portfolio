import { Mail, Phone } from "lucide-react";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again.");
        },
      );
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-secondary-foreground max-w-md mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-muted bg-card"
            >
              <a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors duration-300 inline-block"
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
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        {/* Styled Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border-primary/30 animate-fade-in animation-delay-300">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 p-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  required
                  placeholder="example@email.com"
                  className="w-full px-4 p-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 p-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                />
              </div>
              <Button type="submit" className={"w-full"} size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
