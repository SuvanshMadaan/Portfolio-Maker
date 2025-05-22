const form = document.getElementById('portfolioForm');
const portfolioSection = document.getElementById('portfolio');

const fields = {
  name: 'displayName',
  title: 'displayTitle',
  about: 'displayAbout',
  email: 'displayEmail',
  project1: 'displayProject1',
  project2: 'displayProject2',
};

const listFields = {
  softSkills: 'displaySoftSkills',
  techSkills: 'displayTechSkills',
  hobbies: 'displayHobbies',
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Basic fields
  for (const key in fields) {
    document.getElementById(fields[key]).textContent = document.getElementById(key).value;
  }

  // List fields
  for (const key in listFields) {
    const items = document.getElementById(key).value
      .split(',')
      .map(item => `<li>${item.trim()}</li>`)
      .join('');
    document.getElementById(listFields[key]).innerHTML = items;
  }

  portfolioSection.classList.remove('hidden');
});

// Download the portfolio as an HTML file
function downloadPortfolio() {
  const portfolioHTML = portfolioSection.outerHTML;
  const css = document.querySelector('link[rel="stylesheet"]').href;
  const blob = new Blob([`
    <html>
    <head>
      <title>My Portfolio</title>
      <link href="${css}" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Poppins:wght@300;600&display=swap" rel="stylesheet">
    </head>
    <body style="background: #0f2027; color: #fff; font-family: 'Poppins', sans-serif;">
      ${portfolioHTML}
    </body>
    </html>
  `], { type: 'text/html' });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'portfolio.html';
  a.click();
}
