import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            About Me
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 transition-colors duration-300">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I am a final year IT student with a strong interest in software testing. During my studies, I found that I really enjoy checking software for errors and helping to make it work better. I like understanding how software behaves and making sure it meets the right standards.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I am now looking for a chance to start my career as a Quality Assurance (QA) Engineer. As a fresher, I am excited to use what I have learned and to keep learning new things in a real work environment. I want to work with a team where I can grow and help improve software quality.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am also very interested in learning test automation and using new tools that help speed up and improve the testing process. I believe learning new skills and keeping up with the latest trends will help me become a better QA professional in the future.
            </p>
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Education
            </h3>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                  B.Sc. (Hons.) in Information Technology and Management
                </h4>
                <p className="text-blue-500 font-medium mt-1">
                  University of Moratuwa
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  2021 - Present
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Final-year undergraduate at the University of Moratuwa, pursuing a degree in Information Technology and Management. Passionate about exploring new technologies, I approach tasks with maturity and responsibility, applying my knowledge through self-study and hard work to continuously grow in the field.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                  GCE Advanced Level
                </h4>
                <p className="text-blue-500 font-medium mt-1">
                  Sri Sangamitta Girls National School - Matale
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  2016-2019
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  completed the Advanced Level examination in the Arts stream, specializing in Information and Communication Technology (ICT), Dancing, and Geography. I achieved a Merit Pass, securing 2nd place in the district and ranking 85th in Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
