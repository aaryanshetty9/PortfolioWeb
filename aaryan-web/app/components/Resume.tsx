import Link from "next/link"

export default function Resume() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Aaryan Shetty</h2>
          <p className="text-lg text-gray-600">Sammamish, WA 98075 | (425) 691-6205 | aaryans.shs@gmail.com</p>
          <p className="text-lg text-gray-600">
            <a href="https://www.linkedin.com/in/aaryanshetty-/" className="text-blue-600 hover:underline">
              LinkedIn
            </a>{" "}
            |
            <a href="https://github.com/aaryanshetty9" className="text-blue-600 hover:underline ml-2">
              GitHub: aaryanshetty9
            </a>
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">TECHNICAL SKILLS</h3>
          <p className="text-gray-700">
            <strong>Front End:</strong> JavaScript, React, HTML, CSS
          </p>
          <p className="text-gray-700">
            <strong>Back End:</strong> Python, C++, MongoDB, Express, Node.js
          </p>
          <p className="text-gray-700">
            <strong>Testing/Deployment:</strong> AWS, Microsoft Azure, Snowflake, Datadog
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">EXPERIENCE</h3>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yBZHfUzV6NuljJoGeYoC9eZ1EDSlK2.png"
                alt="Chewy logo"
                className="w-6 h-6 mr-2"
              />
              <h4 className="text-xl font-semibold">Chewy | Software Engineering Co-op | Bellevue, WA</h4>
            </div>
            <p className="text-gray-600 italic">Jun 2024 – Dec 2024</p>
            <p className="text-gray-700">Backend SDE co-op working on ORS team</p>
            <p className="text-gray-700 italic">Python | SQL | AWS</p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>
                Designed and implemented a rules-based routing system for ORS Sims, improving routing efficiency by
                reducing computation time by 47% and cutting operational costs by $120,000 annually compared to the
                existing linear programming model
              </li>
              <li>
                Developed a translation layer between batch data frame-based models and object-oriented models, enabling
                compatibility with optimizers and reducing integration time by 5 hours/week
              </li>
              <li>
                Conducted over 267 simulations comparing the rules-based router with ORS2.0, identifying potential cost
                savings of $20,000/year and improving order processing time by 15%
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CE5gfA5sRNY1DxjBsEPXxyr2C7CcA8.png"
                alt="T-Mobile logo"
                className="w-6 h-6 mr-2"
              />
              <h4 className="text-xl font-semibold">T-Mobile | Software Engineering Intern | Bellevue, WA</h4>
            </div>
            <p className="text-gray-600 italic">May 2023 – Sep 2023</p>
            <p className="text-gray-700">Full-Stack SWE intern supporting T-Mobile MONEY team</p>
            <p className="text-gray-700 italic">HTML | JavaScript | Python | CSS | AWS</p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>
                Managed end-to-end development, including UI/UX design and data security, and successfully integrated
                the solution into a high-usage data centralization and collaboration application with 45,000+ monthly
                logins
              </li>
              <li>
                Contributed to the architecture and design of software components for the company's banking initiative,
                using JS, CSS, and Bootstrap to optimize frontend, achieving a more efficient, simplified web structure
              </li>
              <li>
                Collaborated with leadership to implement GPT-4-powered data analysis, enhancing Generative AI
                initiatives across the product portfolio and improving operational efficiency by 75%
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold">
              Khoury College of Computer Science | Mentor | Boston, MA 
            </h4>
            <p className="text-gray-600 italic">Sep 2023 – Jan 2025</p>
            <p className="text-gray-700">Mentored and assisted aspiring and current students with CS-related questions</p>
            <p className="text-gray-700 italic">Python | Java | Racket</p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>
                Provided valuable insights and guidance on college life to prospective students, to facilitate a smooth transition.
              </li>
              <li>
                Supported current students by assisting with personal projects and assignments in Racket and Python
              </li>
              <li>
                 Offered support in answering questions related to co-op opportunities and requirements to give students clarity in regard to future career opportunities
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">PROJECTS</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">TickerGPT</h4>
            <p className="text-gray-600 italic">Feb 2024 – Present</p>
            <p className="text-gray-700">Language processing model that produces forecasted financial data</p>
            <p className="text-gray-700 italic">Python | React | MongoDB | CSS</p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>
                Utilized OpenAI API for natural language understanding, and Reddit API for sentiment analysis resulting
                in a significant enhancement in forecast accuracy compared to conventional methods, empowering investors
                with more informed decision-making capabilities
              </li>
              <li>
                Designed an intuitive front-end interface using React, HTML, and CSS, enabling users to easily interact
                with the TickerGPT platform and access summarized insights and forecasted charts for selected tickers
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">EDUCATION</h3>
          <h4 className="text-xl font-semibold">Northeastern University- Bachelor of Science, Computer Science</h4>
          <p className="text-gray-600">2026</p>
          <p className="text-gray-700">
            Relevant Coursework: Database Design, Object Oriented Design, Python Computing, Applied Econometrics
          </p>
        </section>
      </div>
    </div>
  )
}

