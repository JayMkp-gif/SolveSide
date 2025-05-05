import Link from "next/link"
import { Button } from "@/components/ui/button"

// Add components
import ScrollToTop from "@/components/scroll-to-top"
import AnimatedSection from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Solve Side Academy | Our Mission and Values",
  description:
    "Learn about Solve Side Academy's mission, vision, values, and our commitment to empowering youth through education and leadership development.",
  alternates: {
    canonical: "/about",
  },
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Solve Side Academy</h1>
            <p className="mb-6 text-lg text-white/90">Empowering youth through education, leadership, and guidance.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 gradient-text">Our Mission</h2>
                <p className="mb-4 text-lg text-gray-600">
                  At Solve Side Academy, our mission is to empower youth with the skills, knowledge, and confidence they
                  need to succeed in an ever-changing world. We believe in the transformative power of education,
                  mentorship, and leadership development.
                </p>
                <p className="text-lg text-gray-600">
                  We are committed to creating a supportive environment where young people can discover their potential,
                  develop their talents, and become responsible, engaged citizens who make positive contributions to
                  their communities.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 gradient-text">Our Vision</h2>
                <p className="mb-4 text-lg text-gray-600">
                  We envision a world where all young people have access to quality education, mentorship, and
                  opportunities that enable them to reach their full potential and lead fulfilling lives.
                </p>
                <p className="text-lg text-gray-600">
                  Solve Side Academy strives to be a leading organization in youth development, recognized for our
                  innovative programs, dedicated team, and measurable impact on the lives of young people and their
                  communities.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient-text">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto max-w-3xl text-gray-600">
                <p>
                  Solve Side Academy was founded by a group of educators, community leaders, and business professionals
                  who recognized the need for comprehensive youth development programs that address the whole person –
                  mind, body, and spirit.
                </p>
                <p>
                  What began as a small after-school program serving 25 students has grown into a multi-faceted
                  organization that reaches over 1,000 young people annually through our various programs and
                  initiatives.
                </p>
                <p>
                  Our name, "Solve Side Academy," reflects our belief that education and mentorship can help young
                  people solve the challenges they face and navigate the complexities of growing up in today's world.
                  The "Side" in our name represents our commitment to walking alongside youth on their journey,
                  providing guidance, support, and encouragement every step of the way.
                </p>
                <p>
                  Over the years, we have expanded our programs to include leadership training, career guidance,
                  educational motivation, and specialized initiatives for boy child development. We have also developed
                  strong partnerships with schools, businesses, and community organizations to enhance our impact and
                  reach.
                </p>
                <p>
                  Today, Solve Side Academy continues to evolve and grow, but our core mission remains the same: to
                  empower youth to become the best versions of themselves and to make positive contributions to their
                  communities and the world.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient-text">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">These principles guide everything we do at Solve Side Academy.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border-t-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all our programs and services, continuously improving and innovating to
                  provide the best possible experience for the youth we serve.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border-t-4 border-secondary">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Integrity</h3>
                <p className="text-gray-600">
                  We act with honesty, transparency, and ethical behavior in all our interactions with youth, families,
                  staff, volunteers, and community partners.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border-t-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Inclusivity</h3>
                <p className="text-gray-600">
                  We welcome and respect youth from all backgrounds, cultures, and abilities, creating a safe and
                  supportive environment where everyone feels valued.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border-t-4 border-secondary">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Empowerment</h3>
                <p className="text-gray-600">
                  We believe in the potential of every young person and are committed to providing the tools, resources,
                  and support they need to succeed.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border-t-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We embrace creativity and forward-thinking approaches to address the evolving needs of youth in a
                  rapidly changing world.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border-t-4 border-secondary">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Collaboration</h3>
                <p className="text-gray-600">
                  We work together with youth, families, schools, businesses, and community organizations to maximize
                  our impact and create sustainable change.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section with Contact Us only */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Join Us in Making a Difference</h2>
              <p className="mb-8 text-lg text-white/90">
                Whether you're interested in volunteering, enrolling in our programs, or collaborating, we’d love to
                hear from you.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact" className="flex items-center">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* At the end of the component, before the closing tag */}
      <ScrollToTop />
    </>
  )
}
