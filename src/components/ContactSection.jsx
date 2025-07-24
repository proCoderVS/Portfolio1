import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Laptop2 as LeetcodeIcon } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/util";

export const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "vaibhav@_4466",   
        "template_wunqdfi",  
        form.current,
        "kTgwzFQy57MQZO96Y"   
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("❌ Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 relative bg-secondary/30 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] ring-1 ring-white/10"
    >
      {/* <ToastContainer /> */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] mb-2">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          If you have any inquiries or would like to collaborate, please reach out. I’m always open to new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sh.vaibhav494@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    sh.vaibhav494@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+8382930869"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 83829 30869
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground hover:text-primary">
                    Kanpur, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/vaibhav-sharma-53a091292/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://leetcode.com/u/vaibhavsh99/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LeetcodeIcon className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
