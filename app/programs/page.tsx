import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, BookOpen, Compass, Users, Award, Lightbulb } from "lucide-react"

// Add ScrollToTop component
import ScrollToTop from "@/components/scroll-to-top"

export const metadata = {
  title: "Programs | Solve Side Academy",
  description:
    "Explore our comprehensive programs including youth development, educational motivation, career guidance, leadership training, boy child development, and team building activities.",
  alternates: {
    canonical: "/programs",
  },
}

export default function Programs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Programs</h1>
            <p className="mb-6 text-lg text-white/90">
              Comprehensive programs designed to empower youth and develop future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Youth Through Diverse Programs
            </h2>
            <p className="text-lg text-gray-600">
              At Solve Side Academy, we offer a range of programs designed to address the unique needs and interests of
              young people. Our holistic approach focuses on developing the whole person - intellectually, emotionally,
              and socially.
            </p>
          </div>
        </div>
      </section>

      {/* Youth Development */}
      <section id="youth-development" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Youth Development</h2>
              <p className="mb-6 text-lg text-gray-600">
                Our youth development programs focus on building essential life skills, promoting positive behavior, and
                fostering personal growth. We create a supportive environment where young people can explore their
                interests, develop their talents, and build confidence.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Key Components:</h3>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
                <li>Social and emotional learning</li>
                <li>Character development</li>
                <li>Decision-making and problem-solving skills</li>
                <li>Healthy lifestyle choices</li>
                <li>Community service and civic engagement</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/youth-development.png"
                alt="Youth Development Program"
                width={800}
                height={600}
                className="h-full w-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Motivation */}
      <section id="educational-motivation" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden">
              <Image
                src="/images/educational-motivation.png"
                alt="Educational Motivation Program"
                width={800}
                height={600}
                className="h-full w-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Educational Motivation</h2>
              <p className="mb-6 text-lg text-gray-600">
                Our educational motivation programs inspire a love of learning and help students develop the skills and
                mindset needed for academic success. We provide tutoring, mentoring, and enrichment activities that
                complement formal education.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Key Components:</h3>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
                <li>Academic support and tutoring</li>
                <li>Study skills and time management</li>
                <li>Critical thinking and creativity</li>
                <li>STEM and arts enrichment</li>
                <li>College preparation and planning</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Guidance */}
      <section id="career-guidance" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Career Guidance</h2>
              <p className="mb-6 text-lg text-gray-600">
                Our career guidance programs help young people explore different career paths, understand the education
                and skills required for various professions, and develop a plan for their future. We connect youth with
                professionals in various fields and provide opportunities for job shadowing and internships.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Key Components:</h3>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
                <li>Career exploration and assessment</li>
                <li>Resume writing and interview skills</li>
                <li>Professional networking</li>
                <li>Internship and job shadowing opportunities</li>
                <li>Entrepreneurship education</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/career-guidance.png"
                alt="Career Guidance Program"
                width={800}
                height={600}
                className="h-full w-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Training */}
      <section id="leadership-training" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden">
              <Image
                src="/images/leadership-training.png"
                alt="Leadership Training Program"
                width={800}
                height={600}
                className="h-full w-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Leadership Training</h2>
              <p className="mb-6 text-lg text-gray-600">
                Our leadership training programs develop the next generation of leaders by providing opportunities to
                practice leadership skills, learn from experienced mentors, and take on increasing levels of
                responsibility. We emphasize ethical leadership, effective communication, and collaborative
                problem-solving.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Key Components:</h3>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
                <li>Leadership styles and theories</li>
                <li>Communication and public speaking</li>
                <li>Team building and conflict resolution</li>
                <li>Project planning and management</li>
                <li>Community leadership initiatives</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Boy Child Development */}
      <section id="boy-child" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Boy Child Development</h2>
              <p className="mb-6 text-lg text-gray-600">
                Our boy child development programs address the unique challenges and opportunities facing young men in
                today's society. We provide positive male role models, mentorship, and activities that promote healthy
                masculinity, emotional intelligence, and responsible behavior.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Key Components:</h3>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
                <li>Mentorship and positive male role models</li>
                <li>Emotional intelligence and healthy relationships</li>
                <li>Responsibility and accountability</li>
                <li>Life skills and self-sufficiency</li>
                <li>Positive identity development</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/boy-child.png"
                alt="Boy Child Development Program"
                width={800}
                height={600}
                className="h-full w-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Building */}
      <section id="team-building" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden">
              <Image
                src="/images/team-building.png"
                alt="Team Building Activities"
                width={800}
                height={600}
                className="h-full w-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Team Building Activities</h2>
              <p className="mb-6 text-lg text-gray-600">
                Our team building activities foster collaboration, communication, and cooperation among youth. Through
                fun and engaging challenges, participants learn to work together effectively, appreciate diverse
                perspectives, and develop mutual respect and trust.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Key Components:</h3>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
                <li>Collaborative problem-solving challenges</li>
                <li>Communication exercises</li>
                <li>Trust-building activities</li>
                <li>Group sports and outdoor adventures</li>
                <li>Community service projects</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Program Schedule</h2>
            <p className="text-lg text-gray-600">
              Our programs run throughout the year with various scheduling options to accommodate different needs and
              preferences.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">After-School Programs</h3>
                  <p className="text-gray-600">Monday - Friday, 3:00 PM - 6:00 PM</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Weekend Workshops</h3>
                  <p className="text-gray-600">Saturdays, 9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Summer Intensives</h3>
                  <p className="text-gray-600">June - August, Monday - Friday, 9:00 AM - 3:00 PM</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Leadership Retreats</h3>
                  <p className="text-gray-600">Quarterly weekend retreats (Friday evening - Sunday afternoon)</p>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-4 text-gray-600">
                  For detailed schedules and program-specific information, please contact us.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-white/90">
              Enroll in one of our programs today and take the first step toward a brighter future.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button asChild size="lg" className="bg-gray-200 text-primary hover:bg-gray-300">
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* At the end of the component, before the closing tag */}
      <ScrollToTop />
    </>
  )
}
