import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Users, Sparkles, Clock, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & Master Technician",
      experience: "8+ years",
      specialties: ["Eyelash Extensions", "Advanced Techniques"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah founded Girl Boss with a vision to provide luxury beauty services that empower women to feel confident and beautiful.",
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Nail Artist",
      experience: "6+ years",
      specialties: ["Nail Art", "Creative Designs"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Maria brings creativity and precision to every nail art design, creating unique looks that reflect each client's personality.",
    },
    {
      name: "Emma Thompson",
      role: "Lash & Brow Specialist",
      experience: "5+ years",
      specialties: ["Lash Lifting", "Brow Shaping"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emma specializes in enhancing natural beauty through expert lash and brow treatments that complement each client's features.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent mb-6">
                About Girl Boss
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with a passion for beauty and empowerment, Girl Boss Beauty Studio has been transforming lives
                through exceptional nail art and eyelash services since 2018.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book With Us
                  </Button>
                </Link>
                <Link href="/treatment">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Girl Boss Beauty Studio"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-xl mb-6">
              Girl Boss Beauty Studio was born from a simple belief: every woman deserves to feel like a boss. Founded
              in 2018 by Sarah Chen, our studio began as a small space with big dreams and an unwavering commitment to
              excellence.
            </p>
            <p className="text-lg mb-6">
              What started as a passion project has grown into the premier destination for luxury nail art and eyelash
              services. We've built our reputation on three core principles: exceptional quality, personalized service,
              and empowering our clients to embrace their inner boss.
            </p>
            <p className="text-lg">
              Today, we're proud to serve hundreds of satisfied clients who trust us with their beauty needs. From
              everyday elegance to special occasion glamour, we're here to help you look and feel your absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-pink-500" />,
                title: "Excellence",
                description:
                  "We strive for perfection in every treatment, using only the finest products and techniques.",
              },
              {
                icon: <Heart className="w-12 h-12 text-purple-500" />,
                title: "Care",
                description:
                  "Every client receives personalized attention and care in a welcoming, comfortable environment.",
              },
              {
                icon: <Users className="w-12 h-12 text-pink-500" />,
                title: "Empowerment",
                description:
                  "We believe beauty treatments should make you feel confident, powerful, and ready to conquer the world.",
              },
              {
                icon: <Sparkles className="w-12 h-12 text-purple-500" />,
                title: "Innovation",
                description:
                  "We stay ahead of trends and continuously update our techniques to offer the latest in beauty innovation.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of beauty professionals is dedicated to helping you achieve your beauty goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-pink-600 font-medium">{member.role}</p>
                    </div>
                    <Badge variant="outline" className="border-purple-500 text-purple-600">
                      <Clock className="w-3 h-3 mr-1" />
                      {member.experience}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} className="bg-pink-100 text-pink-700 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Recognition and milestones that make us proud</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "2000+",
                label: "Happy Clients",
                description: "Satisfied customers who trust us with their beauty needs",
              },
              {
                number: "6",
                label: "Years Experience",
                description: "Years of excellence in the beauty industry",
              },
              {
                number: "15+",
                label: "Awards Won",
                description: "Recognition for outstanding service and quality",
              },
              {
                number: "98%",
                label: "Client Retention",
                description: "Clients who return for our exceptional services",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready to Join the Girl Boss Family?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference that passion, expertise, and dedication can make. Book your appointment today and
            discover why we're the premier choice for beauty services.
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
