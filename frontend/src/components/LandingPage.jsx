import {
    ArrowRight,
    BookOpen,
    Users,
    Accessibility,
    MessageSquare,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Spline from "@splinetool/react-spline";
import child from '../assets/ss_.png'


export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f0f0f] transition-all duration-300">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-gray-950 min-h-screen overflow-hidden">
                {/* Content positioned above the image */}
                <div className="relative z-10 container mx-auto px-4 pt-20 pb-40 text-center md:text-left flex flex-col items-center ">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Learning Adapted to <span className="text-purple-600">Every Need</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-center">
                        Our platform provides personalized learning experiences for students with dyslexia, autism, visual or hearing impairments, and other learning differences.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="/demo"
                            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
                        >
                            Try Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="/learn-more"
                            className="px-6 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors flex items-center justify-center"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image fixed at the bottom and centered */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
                    <img src={child} alt="child" className="w-full max-w-md md:max-w-xl" />
                </div>
            </section>



            {/* Features Section */}
            <section id="features" className="py-20 bg-white dark:bg-[#121212]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Adaptive Features</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our platform adapts to different learning needs with specialized features
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={<BookOpen className="h-7 w-7 text-purple-600" />} title="Dyslexia Support" bg="bg-purple-100 dark:bg-purple-800">
                            Customizable fonts, text-to-speech, and color overlays to make reading easier for students with dyslexia.
                        </FeatureCard>

                        <FeatureCard icon={<Users className="h-7 w-7 text-indigo-600" />} title="Autism-Friendly" bg="bg-indigo-100 dark:bg-indigo-800">
                            Distraction-free interfaces, visual schedules, and predictable navigation designed for students with autism.
                        </FeatureCard>

                        <FeatureCard icon={<Accessibility className="h-7 w-7 text-green-600" />} title="Visual Accessibility" bg="bg-green-100 dark:bg-green-800">
                            High contrast modes, screen reader compatibility, and zoom features for visually impaired students.
                        </FeatureCard>

                        <FeatureCard icon={<MessageSquare className="h-7 w-7 text-orange-600" />} title="Hearing Support" bg="bg-orange-100 dark:bg-orange-800">
                            Closed captions, visual cues, and sign language videos for students with hearing impairments.
                        </FeatureCard>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Hear from educators and students who have transformed their learning experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard name="Sarah Johnson" role="Special Education Teacher">
                            "AdaptLearn has revolutionized how I teach students with different learning needs..."
                        </TestimonialCard>
                        <TestimonialCard name="Michael Chen" role="Parent of Student with Dyslexia">
                            "My son struggled with reading until we found AdaptLearn..."
                        </TestimonialCard>
                        <TestimonialCard name="Emma Rodriguez" role="Student with Visual Impairment">
                            "For the first time, I can access the same learning materials as my classmates..."
                        </TestimonialCard>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Learning?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of educators and students who are making education accessible for everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="/signup"
                            className="px-8 py-3 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors font-semibold"
                        >
                            Start Free Trial
                        </a>
                        <a
                            href="/demo"
                            className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-purple-700 transition-colors font-semibold"
                        >
                            Request Demo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, children, bg }) {
    return (
        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className={`${bg} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{children}</p>
        </div>
    );
}

function TestimonialCard({ name, role, children }) {
    return (
        <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                    <img src="/placeholder.svg?height=48&width=48" alt={name} width="48" height="48" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">{children}</p>
        </div>
    );
}
