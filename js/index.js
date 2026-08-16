/*COPYRIGHT*/
    
    const footer = document.createElement('footer');

    const today = new Date();
    
    const thisYear = today.getFullYear();

    const copyright = document.createElement('p');

    copyright.innerHTML = "©️ Michael Bliss " + thisYear;

    footer.appendChild(copyright);

    document.body.appendChild(footer);

    footer.style.margin = '20px'


/*SKILLS*/

    const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"]
    
    const skillsSection = document.getElementById('Skills');

    const skillsList = skillsSection.querySelector('ul')

    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li')
        skill.innerHTML = skills[i];
        skillsList.appendChild(skill);
    }