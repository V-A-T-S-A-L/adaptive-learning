"use client"

import { useState } from "react"
import { Link } from "lucide-react"
import {
  Bell,
  Calendar,
  Settings,
  User,
  BookOpen,
  Users,
  Home,
  Moon,
  Sun,
  VolumeX,
  Volume2,
  MessageSquare,
  Clock,
} from "lucide-react"

// Classroom card component
const ClassroomCard = ({ classroom }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div
        className="h-24 bg-cover bg-center"
        style={{
          backgroundColor: classroom.color || "#3b82f6",
          backgroundImage: classroom.image ? `url(${classroom.image})` : "none",
        }}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{classroom.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{classroom.teacher}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Users className="w-4 h-4 mr-1" />
          <span>{classroom.students} students</span>
        </div>
        <div className="mt-4 flex justify-between">
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              classroom.type === "teacher"
                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            }`}
          >
            {classroom.type === "teacher" ? "Teacher Invite" : "General"}
          </span>
          <Link
            href={`/classroom/${classroom.id}`}
            className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
          >
            Enter →
          </Link>
        </div>
      </div>
    </div>
  )
}

// Main HomePage component
export default function HomePage() {
  // Sample data - in a real app, this would come from an API
  const teacherClassrooms = [
    {
      id: 1,
      name: "Advanced Mathematics",
      teacher: "Dr. Sarah Johnson",
      students: 24,
      type: "teacher",
      color: "#4f46e5",
    },
    {
      id: 2,
      name: "Introduction to Biology",
      teacher: "Prof. Michael Chen",
      students: 32,
      type: "teacher",
      color: "#0891b2",
    },
    { id: 3, name: "World History", teacher: "Ms. Emily Rodriguez", students: 28, type: "teacher", color: "#b45309" },
  ]

  const generalClassrooms = [
    { id: 4, name: "Study Group: Physics", teacher: "Community", students: 45, type: "general", color: "#be185d" },
    { id: 5, name: "Language Exchange", teacher: "Community", students: 67, type: "general", color: "#059669" },
    { id: 6, name: "Coding Club", teacher: "Community", students: 53, type: "general", color: "#7c3aed" },
  ]

  const upcomingAssignments = [
    { id: 1, title: "Math Problem Set", classroom: "Advanced Mathematics", due: "Today, 11:59 PM" },
    { id: 2, title: "Biology Lab Report", classroom: "Introduction to Biology", due: "Tomorrow, 5:00 PM" },
    { id: 3, title: "History Essay Draft", classroom: "World History", due: "Friday, 3:00 PM" },
  ]

  // State for accessibility settings
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    dyslexiaFont: false,
    highContrast: false,
    darkMode: false,
    reducedMotion: false,
    textToSpeech: false,
    textSize: 100,
  })

  // State for accessibility panel
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false)

  // Update accessibility settings
  const updateSettings = (setting, value) => {
    setAccessibilitySettings((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  // Apply accessibility settings to the root element
  const rootClasses = [
    accessibilitySettings.dyslexiaFont ? "font-dyslexic" : "font-sans",
    accessibilitySettings.highContrast ? "high-contrast" : "",
    accessibilitySettings.darkMode ? "dark" : "",
    accessibilitySettings.reducedMotion ? "reduce-motion" : "",
    `text-size-${accessibilitySettings.textSize}`,
  ].join(" ")

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${rootClasses}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">AdaptLearn</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAccessibilityPanel(true)}
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Accessibility settings"
              >
                <Settings className="h-6 w-6" />
              </button>

              <button
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Notifications"
              >
                <Bell className="h-6 w-6" />
              </button>

              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
                <span className="ml-2 text-gray-700 dark:text-gray-200">Alex Taylor</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <nav className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Navigation</h2>
              </div>
              <div className="p-2">
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/dashboard"
                      className="flex items-center px-3 py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-md"
                    >
                      <Home className="mr-3 h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/classrooms"
                      className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                    >
                      <BookOpen className="mr-3 h-5 w-5" />
                      <span>My Classrooms</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/calendar"
                      className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                    >
                      <Calendar className="mr-3 h-5 w-5" />
                      <span>Calendar</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/messages"
                      className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                    >
                      <MessageSquare className="mr-3 h-5 w-5" />
                      <span>Messages</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                    >
                      <User className="mr-3 h-5 w-5" />
                      <span>Profile</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Accessibility shortcuts */}
            <div className="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Accessibility</h2>
              </div>
              <div className="p-4 space-y-3">
                <button
                  onClick={() => updateSettings("darkMode", !accessibilitySettings.darkMode)}
                  className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                >
                  {accessibilitySettings.darkMode ? (
                    <Sun className="mr-3 h-5 w-5" />
                  ) : (
                    <Moon className="mr-3 h-5 w-5" />
                  )}
                  <span>{accessibilitySettings.darkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>

                <button
                  onClick={() => updateSettings("textToSpeech", !accessibilitySettings.textToSpeech)}
                  className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                >
                  {accessibilitySettings.textToSpeech ? (
                    <VolumeX className="mr-3 h-5 w-5" />
                  ) : (
                    <Volume2 className="mr-3 h-5 w-5" />
                  )}
                  <span>{accessibilitySettings.textToSpeech ? "Disable TTS" : "Enable TTS"}</span>
                </button>

                <button
                  onClick={() => setShowAccessibilityPanel(true)}
                  className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                >
                  <Settings className="mr-3 h-5 w-5" />
                  <span>More Settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1">
            {/* Welcome section */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, Alex!</h1>
              <p className="text-gray-600 dark:text-gray-300">
                You have <span className="font-medium text-blue-600 dark:text-blue-400">3 upcoming assignments</span>{" "}
                this week.
              </p>
            </div>

            {/* Teacher-invited classrooms */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Teacher Classrooms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teacherClassrooms.map((classroom) => (
                  <ClassroomCard key={classroom.id} classroom={classroom} />
                ))}
              </div>
            </section>

            {/* General classrooms */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">General Classrooms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {generalClassrooms.map((classroom) => (
                  <ClassroomCard key={classroom.id} classroom={classroom} />
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <div className="w-full md:w-80 flex-shrink-0">
            {/* Upcoming assignments */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Upcoming Assignments</h2>
                <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {upcomingAssignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <h3 className="font-medium text-gray-900 dark:text-white">{assignment.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{assignment.classroom}</p>
                    <div className="mt-1 flex items-center text-sm">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          assignment.due.includes("Today")
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        }`}
                      >
                        Due: {assignment.due}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Link href="/assignments" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                  View all assignments →
                </Link>
              </div>
            </div>

            {/* Join new classroom */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Join a Classroom</h2>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Enter a classroom code to join a new classroom
                </p>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                    Join
                  </button>
                </div>
                <div className="mt-4">
                  <Link href="/explore" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                    Explore public classrooms →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

