import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Brain,
  BookOpen,
  Compass,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  CheckCircle,
  Target,
  Heart,
} from "lucide-react"

// Add components
import ScrollToTop from "@/components/scroll-to-top"
import AnimatedSection from "@/components/animated-section"
import AnimatedCounter from "@/components/animated-counter"
import GradientButton from "@/components/gradient-button"

export const metadata = {
  title: "Solve Side Academy | Empowering Youth for a Brighter Future",
  description:
    "Solve Side Academy offers youth development programs, educational motivation, career guidance, and leadership training to help young people reach their full potential.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20" />
        <div className="hero-gradient absolute inset-0" />
        <div className="container relative mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-16 text-center text-white md:px-6 lg:min-h-[700px]">
          <Image
            src="/images/logo.png"
            alt="Solve Side Academy Logo"
            width={120}
            height={120}
            className="mb-6 floating"
            priority
          />
          <AnimatedSection className="stagger-1">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empowering Youth for a <span className="text-yellow-300">Brighter Future</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection className="stagger-2">
            <p className="mb-8 max-w-3xl text-lg text-white/90 md:text-xl">
              Solve Side Academy is dedicated to youth development, educational motivation, career guidance, and
              leadership training to help young people reach their full potential.
            </p>
          </AnimatedSection>
          <AnimatedSection className="stagger-3 flex flex-col gap-4 sm:flex-row">
            <GradientButton href="/programs" size="lg" variant="secondary" icon>
              Explore Our Programs
            </GradientButton>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>

          {/* Added visual elements for desktop */}
          <div className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center space-x-16 opacity-80">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block mb-2">
                <Target className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Focused Programs</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block mb-2">
                <CheckCircle className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Proven Results</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block mb-2">
                <Heart className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Dedicated Mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with enhanced visuals */}
      <section className="educational-pattern py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-64 mx-auto">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-primary/20 rounded-full"></div>
                    <div className="absolute inset-8 bg-primary/30 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap className="h-20 w-20 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient-text">
                    Our Mission
                  </h2>
                  <div className="quote-box mb-8">
                    <p className="text-lg text-gray-600">
                      At Solve Side Academy, we believe in the power of education, mentorship, and leadership
                      development to transform lives. Our mission is to empower youth with the skills, knowledge, and
                      confidence they need to succeed in an ever-changing world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <GradientButton href="/about" icon>
                  Learn More About Us
                </GradientButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Section with enhanced cards */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient-text">
                Our Programs
              </h2>
              <p className="text-lg text-gray-600">
                We offer a variety of programs designed to support youth development and empower the next generation of
                leaders.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection className="stagger-1">
              <div className="feature-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 pulse mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Youth Development</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive programs that focus on personal growth, social skills, and emotional intelligence for
                  young people.
                </p>
                <Link
                  href="/programs#youth-development"
                  className="text-primary flex items-center font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-2">
              <div className="feature-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 pulse mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Educational Motivation</h3>
                <p className="text-gray-600 mb-4">
                  Inspiring young minds to embrace learning, develop critical thinking skills, and pursue academic
                  excellence.
                </p>
                <Link
                  href="/programs#educational-motivation"
                  className="text-primary flex items-center font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-3">
              <div className="feature-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 pulse mb-4">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Career Guidance</h3>
                <p className="text-gray-600 mb-4">
                  Helping youth explore career options, develop professional skills, and plan their educational and
                  career paths.
                </p>
                <Link
                  href="/programs#career-guidance"
                  className="text-primary flex items-center font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-4">
              <div className="feature-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 pulse mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Leadership Training</h3>
                <p className="text-gray-600 mb-4">
                  Developing the next generation of leaders through workshops, mentorship, and hands-on leadership
                  experiences.
                </p>
                <Link
                  href="/programs#leadership-training"
                  className="text-primary flex items-center font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-5">
              <div className="feature-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 pulse mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Boy Child Development</h3>
                <p className="text-gray-600 mb-4">
                  Specialized programs addressing the unique challenges and opportunities facing young men in today's
                  society.
                </p>
                <Link href="/programs#boy-child" className="text-primary flex items-center font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-6">
              <div className="feature-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 pulse mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Team Building</h3>
                <p className="text-gray-600 mb-4">
                  Fun and engaging activities that foster collaboration, communication, and teamwork among youth.
                </p>
                <Link
                  href="/programs#team-building"
                  className="text-primary flex items-center font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12 text-center">
            <GradientButton href="/programs" icon>
              View All Programs
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual divider */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="content-divider"></div>
      </div>

      {/* Impact Section with enhanced visuals */}
      <section className="waves-pattern py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient-text">
                Our Impact
              </h2>
              <p className="text-lg text-gray-600">
                We're proud of the difference we're making in the lives of young people.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection className="stagger-1">
              <div className="rounded-lg bg-white p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <p className="mb-2 text-4xl font-bold text-primary">
                  <AnimatedCounter end={1000} suffix="+" />
                </p>
                <p className="text-gray-600">Youth Served</p>
                <div className="mt-4 progress-bar">
                  <div className="progress-bar-fill w-full"></div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-2">
              <div className="rounded-lg bg-white p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <p className="mb-2 text-4xl font-bold text-primary">
                  <AnimatedCounter end={50} suffix="+" />
                </p>
                <p className="text-gray-600">Community Partners</p>
                <div className="mt-4 progress-bar">
                  <div className="progress-bar-fill w-full"></div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-3">
              <div className="rounded-lg bg-white p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <p className="mb-2 text-4xl font-bold text-primary">
                  <AnimatedCounter end={25} suffix="+" />
                </p>
                <p className="text-gray-600">Programs Offered</p>
                <div className="mt-4 progress-bar">
                  <div className="progress-bar-fill w-full"></div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="stagger-4">
              <div className="rounded-lg bg-white p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <p className="mb-2 text-4xl font-bold text-primary">
                  <AnimatedCounter end={90} suffix="%" />
                </p>
                <p className="text-gray-600">Program Success Rate</p>
                <div className="mt-4 progress-bar">
                  <div className="progress-bar-fill w-full"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Educational Values Section with enhanced layout */}
      <AnimatedSection>
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient-text">
                Educational Values
              </h2>
              <p className="text-lg text-gray-600">
                Our approach is built on core educational principles that guide everything we do.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10">
                  <BookOpenCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
                <p className="text-gray-600">
                  We recognize that each student has unique strengths, challenges, and learning styles. Our programs are
                  designed to meet individual needs.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-secondary">
                <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-secondary/10">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  We maintain high standards and expectations, encouraging students to push beyond their comfort zones
                  and achieve their full potential.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                <p className="text-gray-600">
                  We believe in the power of community involvement and create opportunities for students to connect with
                  and contribute to their communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

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

      <ScrollToTop />
    </>
  )
}
