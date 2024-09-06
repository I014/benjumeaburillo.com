const cvData = {
    education: [
      {
        title: 'Grado de Ingeniería de Software',
        institution: 'Universidad Politécnica de Madrid',
        year: '2022 - 2026'
      },
      {
        title: 'Bachillerato de Ciencias y Tecnología',
        institution: 'Colegio Torrevilano',
        year: '2020 - 2022'
      }
    ],
    experience: [
      
    ],
    skills: [

    ],
    projects: [
      {
        title: 'Reverse Engineering EMT',
        description: 'Decompiled the official EMT Madrid Android app to reverse engineer its API and build a custom app that provides the ability to undock bikes from the stations, ' +
                    'get the closest stations to the user and get the status of the stations. While doing that I stumbled upon a very serious security issue that I reported to EMT.',
        tags: ['Java', 'Flask', 'Python', 'Ghidra']
      },
      {
        title: 'Reldus',
        description: 'Developed a chess engine in Swift that leverages an AI decision tree with alpha-beta pruning to predict optimal moves. ' + 
                    'The engine communicates using the standard [UCI protocol](https://www.chessprogramming.org/UCI) and supports advanced chess rules including castling, en passant, threefold repetition, and pawn promotion.',
        link: 'https://github.com/Intron014/Reldus',
        tags: ['Swift', 'AI', 'Chess']
      },
      {
        title: 'Gasoprice',
        description: 'Built a PWA that fetches real-time gas prices for all Spanish gas stations and then displays the closest ones to the user, ' +
                    'allowing for fine-grained filtering by fuel type, brand and prices. It also allows users to see a map view of the stations.',
        link: 'https://gp.benjumeaburillo.com',
        tags: ['PWA', 'Flask', 'Python', 'API']
      }
    ]
  };
  
  function populateCV() {
    const educationList = document.getElementById('education-list');
    cvData.education.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.title}</strong><br>${item.institution}, ${item.year}`;
        educationList.appendChild(li);
    });

    if (cvData.education.length === 0) {
        const cvEduSection = document.getElementById('cv-edu');
        cvEduSection.style.display = 'none';
    }
  
    const experienceList = document.getElementById('experience-list');
    cvData.experience.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${item.title}</strong><br>${item.company}, ${item.period}<br>${item.description}`;
      experienceList.appendChild(li);
    });

    if (cvData.experience.length === 0) {
        const cvExpSection = document.getElementById('cv-exp');
        cvExpSection.style.display = 'none';
    }

    const skillsList = document.getElementById('skills-list');
    cvData.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    if (cvData.skills.length === 0) {
        const cvSkillsSection = document.getElementById('cv-sk');
        cvSkillsSection.style.display = 'none';
    }

    const projectsList = document.getElementById('projects-list');
    cvData.projects.forEach(project => {
      const li = document.createElement('li');
      if(project.link) {
        project.title = `<a href="${project.link}">${project.title}</a>`;
      }
      li.innerHTML = `
        <strong>${project.title}<br>
        ${convertMarkdownLinks(project.description)}<br>
        <span class="project-tags">${project.tags.join(', ')}</span>
      `;
      projectsList.appendChild(li);
    });

    if (cvData.education.length === 0 && cvData.experience.length === 0 && cvData.skills.length === 0) {
        const cvSection = document.getElementById('cv');
        if (cvSection) {
            cvSection.style.display = 'none';
        }
    }

    if (cvData.projects.length === 0) {
        const cvProjectsSection = document.getElementById('cv-pr');
        if (cvProjectsSection) {
            cvProjectsSection.style.display = 'none';
        }
    }
  }

  function convertMarkdownLinks(text) {
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  }

  window.addEventListener('load', populateCV);