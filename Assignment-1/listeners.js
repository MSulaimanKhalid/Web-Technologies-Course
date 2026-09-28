document.getElementById("summary-btn").addEventListener("click", summary);
document.getElementById("education-btn").addEventListener("click", education);
document.getElementById("projects-btn").addEventListener("click", projects);
document.getElementById("experience-btn").addEventListener("click", experience);
document.getElementById("expertise-btn").addEventListener("click", expertise);
document.getElementById("skills-btn").addEventListener("click", skills);

const summaryBtn = document.getElementById("summary-btn");
const educationBtn = document.getElementById("education-btn");
const projectsBtn = document.getElementById("projects-btn");
const experienceBtn = document.getElementById("experience-btn");
const expertiseBtn = document.getElementById("expertise-btn");
const skillsBtn = document.getElementById("skills-btn");

const summarySection = document.getElementById("summary");
const educationSection = document.getElementById("education");
const projectsSection = document.getElementById("projects");
const experienceSection = document.getElementById("experience");
const expertiseSection = document.getElementById("expertise");
const skillsSection = document.getElementById("skills");

function hideAllSections() {
  summarySection.style.display = "none";
  educationSection.style.display = "none";
  projectsSection.style.display = "none";
  experienceSection.style.display = "none";
  expertiseSection.style.display = "none";
  skillsSection.style.display = "none";

  summarySection.classList.remove("show");
  educationSection.classList.remove("show");
  projectsSection.classList.remove("show");
  experienceSection.classList.remove("show");
  expertiseSection.classList.remove("show");
  skillsSection.classList.remove("show");
}

function summary() {
  hideAllSections();
  summarySection.style.display = "block";
  updateActiveButton(summaryBtn);
  setTimeout(function () {
    summarySection.classList.add("show");
  }, 100);
}

function education() {
  hideAllSections();
  educationSection.style.display = "block";
  updateActiveButton(educationBtn);
  setTimeout(function () {
    educationSection.classList.add("show");
  }, 100);
}

function projects() {
  hideAllSections();
  projectsSection.style.display = "block";
  updateActiveButton(projectsBtn);
  setTimeout(function () {
    projectsSection.classList.add("show");
  }, 100);
}

function experience() {
  hideAllSections();
  experienceSection.style.display = "block";
  updateActiveButton(experienceBtn);
  setTimeout(function () {
    experienceSection.classList.add("show");
  }, 100);
}

function expertise() {
  hideAllSections();
  expertiseSection.style.display = "block";
  updateActiveButton(expertiseBtn);
  setTimeout(function () {
    expertiseSection.classList.add("show");
  }, 100);
}

function skills() {
  hideAllSections();
  skillsSection.style.display = "block";
  updateActiveButton(skillsBtn);
  setTimeout(function () {
    skillsSection.classList.add("show");
  }, 100);
}

function updateActiveButton(clickedButton) {
  const buttons = document.querySelectorAll("aside button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-btn");
  }
  clickedButton.classList.add("active-btn");
}

document.getElementById("summary-btn").click();
