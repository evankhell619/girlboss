"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/navigation";

export default function BookingPage() {
  const handleWhatsAppBooking = () => {
    window.open("https://wa.me/6287700105777", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent mb-6">
              Book Online
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to transform your look? Book your appointment through
              WhatsApp for instant confirmation and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-12">
              <CardTitle className="text-3xl font-bold mb-4">
                Book Your Appointment
              </CardTitle>
              <p className="text-lg opacity-90">
                Get instant confirmation via WhatsApp
              </p>
            </CardHeader>

            <CardContent className="p-12">
              <div className="text-center mb-8">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-16 h-16 text-pink-500 mx-auto mb-4"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.84 11.84 0 0 0 1.7 6.17L0 24l6.29-1.65A11.86 11.86 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22c-1.75 0-3.45-.46-4.94-1.34l-.35-.2-3.73.98.99-3.62-.23-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.6.14-.17.28-.69.9-.85 1.08-.16.17-.31.2-.59.07-.28-.14-1.19-.44-2.26-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.15.19-.26.29-.43.09-.17.04-.32-.02-.46-.06-.14-.59-1.43-.81-1.96-.21-.52-.42-.45-.6-.46l-.51-.01c-.17 0-.46.07-.7.32-.24.25-.92.9-.92 2.2s.94 2.55 1.07 2.73c.14.18 1.84 2.8 4.47 3.93.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.63-.67 1.86-1.31.23-.63.23-1.17.16-1.28-.06-.12-.24-.19-.51-.33z" />
</svg>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  WhatsApp Booking
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Click the button below to start a WhatsApp conversation with
                  our booking team. We'll help you choose the perfect treatment
                  and find the best time for your appointment.
                </p>

                <Button
                  onClick={handleWhatsAppBooking}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16 .396c-8.84 0-16 6.953-16 15.54 0 2.74.797 5.3 2.164 7.523L0 32l8.465-2.207c2.308 1.256 4.984 1.964 7.887 1.964 8.84 0 16-6.953 16-15.54S24.84.396 16 .396zm0 28.708c-2.676 0-5.164-.736-7.273-2.012l-.52-.308-5.027 1.313 1.344-4.914-.34-.508c-1.28-1.925-2-4.164-2-6.58 0-6.757 5.805-12.271 12.816-12.271 7.012 0 12.816 5.514 12.816 12.27 0 6.756-5.805 12.27-12.816 12.27zm7.027-9.695c-.383-.191-2.27-1.117-2.625-1.242-.352-.127-.609-.191-.867.191-.258.383-.996 1.242-1.223 1.5-.223.254-.445.287-.828.096-.383-.192-1.621-.596-3.088-1.9-1.14-1.015-1.91-2.27-2.133-2.65-.223-.383-.023-.59.17-.78.175-.174.383-.445.574-.668.192-.223.255-.383.384-.639.127-.254.064-.478-.031-.668-.096-.191-.867-2.088-1.188-2.85-.312-.762-.629-.658-.867-.67l-.74-.014c-.223 0-.582.08-.887.383-.305.305-1.16 1.133-1.16 2.766s1.188 3.205 1.355 3.43c.175.223 2.34 3.567 5.668 5.004.793.342 1.41.547 1.895.699.797.254 1.52.219 2.09.133.637-.094 1.963-.801 2.238-1.574.277-.773.277-1.434.195-1.574-.08-.14-.305-.223-.637-.383z" />
                  </svg>
                  Book via WhatsApp
                </Button>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <Phone className="w-4 h-4 inline mr-1" />
                  +62 8770 0105 777
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-center p-6 bg-pink-50 dark:bg-slate-800/80 rounded-lg">
                  <Calendar className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Easy Scheduling
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose from available time slots that work best for your
                    schedule
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 dark:bg-slate-800/80 rounded-lg">
                  <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Instant Confirmation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get immediate booking confirmation and appointment reminders
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here's what happens when you book with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg">
              <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Send us a message on WhatsApp with your preferred treatment and
                timing
              </p>
            </Card>

            <Card className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Confirmation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We'll confirm your appointment and send you all the details you
                need
              </p>
            </Card>

            <Card className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg">
              <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Your Treatment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Arrive for your appointment and enjoy our premium beauty
                services
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
