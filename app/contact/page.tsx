import ContactClient from "./ContactClient"

export const metadata = {
  title: "Contact Us | Solve Side Academy",
  description:
    "Get in touch with Solve Side Academy. We'd love to hear from you about our youth development programs, volunteering opportunities, or partnerships.",
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  return <ContactClient />
}
