const express = require('express');
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/professional', (req, res) => {
  const data = {
    professionalName: "Your Full Name",
    base64Image: "PASTE_BASE64_IMAGE_HERE",
    nameLink: {
      firstName: "YourFirstName",
      url: "https://yourwebsite.com"
    },
    primaryDescription: " is a web developer.",
    workDescription1: "Write about your work or projects here.",
    workDescription2: "Write about your skills or interests here.",
    linkTitleText: "Find me online:",
    linkedInLink: {
      text: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com/yourusername"
    }
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});