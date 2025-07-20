import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help with all your digital service needs. Contact us today!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6 rounded-2xl shadow-lg">
              <CardContent className="p-0 space-y-6">
                <h3 className="font-headline text-2xl font-bold text-primary">Contact Information</h3>
                <div className="space-y-4 text-left">
                  <div className="font-semibold text-lg text-foreground flex items-center gap-4">
                    <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                        <span className="font-normal text-sm text-muted-foreground">Phone</span>
                        <a href="tel:7293148158" className="block text-primary hover:underline">7293148158</a>
                    </div>
                  </div>
                  <div className="font-semibold text-lg text-foreground flex items-center gap-4">
                    <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                        <span className="font-normal text-sm text-muted-foreground">Email</span>
                        <a href="mailto:idhayamdtpcenter@gmail.com" className="block text-primary hover:underline">idhayamdtpcenter@gmail.com</a>
                    </div>
                  </div>
                  <div className="font-semibold text-lg text-foreground flex items-start gap-4">
                    <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                        <span className="font-normal text-sm text-muted-foreground">Address</span>
                        <span className="block text-foreground/90">1st Floor, Kannan Towers, Shop No 146, opp. to Bharat Petroleum, Hope College, Coimbatore - 641004</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border rounded-2xl shadow-lg overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.091173641217!2d77.0163580748093!3d11.03215205469736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857b07d6a7f09%3A0xb33481432f2f754e!2sHOPES%2C%20Peelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1700030005011!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border:0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of IDHAYAM DTP CENTER location"
                ></iframe>
            </Card>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Send Us a Message</h3>
            <p className="text-muted-foreground mb-6">We'll get back to you as soon as possible.</p>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">Name</Label>
                <Input id="name" placeholder="Your Name" className="bg-background rounded-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-background rounded-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground/80">Message</Label>
                <Textarea id="message" placeholder="Your message..." className="bg-background rounded-xl" rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full transition-transform hover:scale-105">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
