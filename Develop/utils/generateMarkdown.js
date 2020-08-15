const toc = require("markdown-toc");

// function to generate markdown for README
function generateMarkdown(data, license) {
  return `
# ${data.title}
[![License](https://img.shields.io/badge/License-${license}  

<br>
## Description
${data.description}

<br>
## Table of Contents
${toc('# Installation\n\n# Usage\n\n# License\n\n# Contributing\n\n# Tests\n\n# Questions').content}

<br>
## Installation
Use the package manager ${data.install} to install ${data.title}  
<pre><code>${data.install} install ${data.title}</code></pre>

<br>
## Usage
${data.usage}

<br>
## License  
Click on the badge (top of page) for this project's ${data.license} licensing information.

<br>
## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please submit an issue](https://github.com/${data.github}/${data.title}/issues/new)

<br>
## Tests  
To run tests, run the following command:
<pre><code>${data.test}</pre></code>

<br>
## Questions
Please contact me with questions via email or Github  
<br>
${data.email}  
[Github Profile](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
