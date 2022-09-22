// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    let splitLicense = license.split(" ")
    let noSpace = splitLicense.join("%20")
    return `https://img.shields.io/badge/license-${noSpace}-blue.svg`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    switch (license) {
      case "Apache License 2.0":
        return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`
      case "GNU General Public License v3.0":
      case "GNU Affero General Public License v3.0":
      case "GNU General Public License v2.0":
      case "GNU Lesser General Public License v2.1":
        return `[GPL](https://choosealicense.com/licenses/gpl-3.0/)`;
      case "MIT License":
        return `[MIT](https://choosealicense.com/licenses/mit/)`;
      case "BSD 'Simplified' License":
      case "BSD 'New' or 'Revised' License":
        return `[ISC](https://choosealicense.com/licenses/isc/)`;
      default:
        return license;
    }
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return {
    badge: renderLicenseBadge(license),
    link: renderLicenseLink(license)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("ppp");
  let license = renderLicenseSection(data.license)
  return `![license](${license.badge})
  # ${data.projectTitle}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${license.link}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.test}

  ## Questions
  - GitHub profile: [GitHub Profile](https://${data.profile}.github.com)
  - Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
