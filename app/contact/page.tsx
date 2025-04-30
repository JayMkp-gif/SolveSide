"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"

// Add components
import ScrollToTop from "@/components/scroll-to-top"
import AnimatedSection from "@/components/animated-section"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
              <p className="mb-6 text-lg text-white/90">
                We'd love to hear from you. Reach out with questions, inquiries, or to get involved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="educational-pattern py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection>
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 gradient-text">Get in Touch</h2>
                <p className="mb-8 text-lg text-gray-600">
                  Whether you're interested in our programs, want to volunteer, or have questions about how we can help,
                  our team is here to assist you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 pulse">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-gray-600">13 Olympus Dr, Olympus AH, Pretoria, 0081</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 pulse">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+27 692112403 </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 pulse">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@solvesideacademy.co.za</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 pulse">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM (By appointment)</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="shadow-lg border-t-4 border-primary">
                <CardHeader className="bg-gray-50 rounded-t-lg">
                  <CardTitle className="gradient-text">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <div className="rounded-lg bg-green-50 p-6 text-center">
                      <h3 className="mb-2 text-xl font-semibold text-green-800">Thank You!</h3>
                      <p className="mb-4 text-green-700">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="bg-white hover:bg-green-100 transition-all duration-300"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="border-gray-300 focus:border-primary focus:ring-primary transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                            className="border-gray-300 focus:border-primary focus:ring-primary transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="border-gray-300 focus:border-primary focus:ring-primary transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          required
                          className="border-gray-300 focus:border-primary focus:ring-primary transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message"
                          rows={5}
                          required
                          className="border-gray-300 focus:border-primary focus:ring-primary transition-all duration-300"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-[1.02]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient-text">
                Ways to Get Involved
              </h2>
              <p className="text-lg text-gray-600">
                There are many ways to support our mission and make a difference in the lives of young people.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection className="stagger-1">
              <Card className="animated-card border-t-4 border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Share your time and talents with our youth. We have various volunteer opportunities available, from
                    mentoring to event support.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection className="stagger-2">
              <Card className="animated-card border-t-4 border-secondary">
                <CardHeader>
                  <CardTitle className="text-secondary">Donate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    Your financial support helps us expand our programs and reach more youth. Every donation, no matter
                    the size, makes a difference.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Link href="/donate" className="flex items-center justify-center">
                      Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection className="stagger-3">
              <Card className="animated-card border-t-4 border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Partner With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    We collaborate with schools, businesses, and community organizations to maximize our impact. Let's
                    work together to support youth development.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Connect?</h2>
              <p className="mb-8 text-lg text-white/90">
                Reach out today to learn more about our programs or how you can get involved.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/programs" className="flex items-center">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/donate" className="flex items-center">
                    Support Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ScrollToTop />
    </>
  )
}
