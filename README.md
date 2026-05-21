# Cybersecurity Professional Portfolio

![Portfolio Preview](./profile.png)

A sleek, dark-themed, and responsive personal portfolio website designed for a Cybersecurity Professional and SOC Analyst. The portfolio highlights technical skills, security certifications, professional experience, and detailed project archives.

**Live Demo:** [https://karthikau-cyber.github.io/portfolio/](https://karthikau-cyber.github.io/portfolio/)

---

## 🛡️ Features

- **Cyber-Aesthetic UI:** Dark mode by default with glassmorphism effects, neon cyan accents, and subtle scroll animations to fit the cybersecurity theme.
- **Responsive Design:** Fully mobile-friendly layout that adapts seamlessly to desktops, tablets, and mobile devices.
- **Dynamic Navigation:** Sticky navigation bar with active section tracking and a smooth-scrolling mobile menu.
- **Contact Form Integration:** Fully functional contact form powered by EmailJS, allowing secure direct messaging without a backend.
- **Zero Dependencies:** Built with pure HTML, CSS, and JavaScript. No build steps, frameworks, or package managers required.

---

## 📂 Sections Include

1. **Entry (Hero):** Introduction, professional title, and dynamic profile picture.
2. **Knowledge Profile (About):** Career summary, education details, and core specializations.
3. **Technical Arsenal (Skills):** Categorized breakdown of tools, frameworks, languages, and security domains.
4. **Classified Volumes (Projects):** High-level overview of key cybersecurity projects with direct links to GitHub repositories.
5. **Archive Records (Experience):** Interactive timeline of internships, roles, and virtual job simulations (e.g., Forage).
6. **Verified Seals (Certifications):** Badges and details for active security certifications (CEH, CC, AZ-900, etc.).
7. **Secure Terminal (Contact):** Direct contact form and quick links to LinkedIn, GitHub, TryHackMe, and picoCTF.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Custom variables (Custom Properties), Flexbox/Grid layouts, CSS animations, and Backdrop Filters (Glassmorphism).
- **Vanilla JavaScript (ES6):** Intersection Observers for scroll animations, DOM manipulation for mobile menus, and form handling.
- **EmailJS:** Third-party API for handling contact form submissions securely.

---

## 🚀 How to Run Locally

Because this project uses vanilla web technologies, running it locally is incredibly simple.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/karthikAu-cyber/portfolio.git
   cd portfolio
   ```

2. **Open the project:**
   Simply double-click the `index.html` file to open it in your default web browser.

   *Alternatively, if you have Node.js installed, you can run a local server:*
   ```bash
   npx serve .
   ```
   Then navigate to `http://localhost:3000` in your browser.

---

## 📬 Contact Integration (EmailJS)

The contact form is configured using [EmailJS](https://www.emailjs.com/). If you fork this repository, you must update the EmailJS credentials in `script.js` to receive emails to your own inbox:

```javascript
// Replace these with your own EmailJS Service ID, Template ID, and Public Key
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm, 'YOUR_PUBLIC_KEY')
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork and customize it for your own portfolio!