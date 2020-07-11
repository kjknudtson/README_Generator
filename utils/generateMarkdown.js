// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${data.link}
  
  ## Description

  ${data.description}

  Repository: ${data.repository}

  ${data.screenshot}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributors

  ${data.credits}

  ## License

  Click on the badge at the top of the file to learn more about the license.

  ## Tests

  ${data.tests}

  ## Questions

  If there are any questions you have, you may contact me at https://github.com/${data.github}

  You may also email me at ${data.email}
`;
}

module.exports = generateMarkdown;
