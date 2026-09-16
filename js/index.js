/*COPYRIGHT*/
    
    const footer = document.createElement('footer');

    const today = new Date();
    
    const thisYear = today.getFullYear();

    const copyright = document.createElement('p');

    copyright.innerHTML = "©️ Michael Bliss " + thisYear;

    footer.appendChild(copyright);

    document.body.appendChild(footer);


/*SKILLS*/

    const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
    
    const skillsSection = document.getElementById('Skills');

    const skillsList = skillsSection.querySelector('ul');

    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.innerHTML = skills[i];
        skillsList.appendChild(skill);
    }

/*MESSAGE FORM SUBMIT*/
    
const messageForm = document.querySelector('form[name = "leave_message"]');

   messageForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log(usersName, usersEmail, usersMessage);

        const messageSection = document.querySelector('#messages');
        const messageList = messageSection.querySelector('ul');
        
        const newMessage = document.createElement('li');
        
        newMessage.innerHTML = `
            <a href = "mailto:${usersEmail}">${usersName}</a>
            <span>${usersMessage}</span>
            `;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.type = 'button';

        removeButton.addEventListener('click', (event) => {
            const entry = event.target.parentNode;
            entry.remove();
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        event.target.reset();
    });
    
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector('ul');

    fetch('https://api.github.com/users/michaelbliss6/repos')
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })

        .then(data => {
            let repositories = data;
            console.log(repositories);
        
        for(let i = 0; i < repositories.length; i++){
            let project = document.createElement('li');
            project.innerHTML = repositories[i].name;
            projectList.appendChild(project)
    }
        
        })    
        .catch(error => {
            console.log('Error fetching repositories', error);
        });
    
    