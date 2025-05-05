import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Solve Side Academy Logo" width={40} height={40} />
              <span className="text-xl font-bold">
                <span className="text-white">Solve Side</span>{" "}
                <span className="text-gray-300 font-serif italic">Academy</span>
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering youth through education, leadership, and guidance to build a brighter future.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
              <li></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs#youth-development"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Youth Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#educational-motivation"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Educational Motivation
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#career-guidance"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Career Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#leadership-training"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Leadership Training
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#boy-child"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Boy Child Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#team-building"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span> Team Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-400">13 Olympus Dr, Olympus AH, Pretoria, 0081</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-400">+27 692112403</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gray-400" />
                <a href="mailto:info@solvesideacademy.org" className="text-gray-400 hover:text-white">
                  info@solvesideacademy.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Solve Side Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
