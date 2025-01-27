import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Aaryan Shetty</h1>
          <p className="text-xl text-gray-600">Web Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-700 mb-6">Bachelor of Science in Computer Science, University Name, Year</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
              <li className="mb-2">Web Developer at Company A, 2020-Present</li>
              <li>Intern at Company B, Summer 2019</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <p className="text-gray-700">React, Next.js, JavaScript, TypeScript, HTML, CSS, Node.js</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

