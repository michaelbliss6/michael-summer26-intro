/*COPYRIGHT*/
    
    const footer = document.createElement('footer');

    const today = new Date();
    
    const thisYear = today.getFullYear();

    const copyright = document.createElement('p');

    copyright.innerHTML = "©️ Michael Bliss " + thisYear;

    footer.appendChild(copyright);

    document.body.appendChild(footer);

    footer.style.margin = '20px';


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

    function toggleMessagesVisibility() {
        const messageSection = document.querySelector('#messages');
        

        if (messageList.children.length === 0) {
            messageSection.style.display = 'none';
        } else {
            messageSection.style.display = 'block';
        }
        }

    
    const messageForm = document.querySelector('form[name="leave_message"]');
    const messageList = document.querySelector('#messages ul');
    
    toggleMessagesVisibility();

   messageForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log(usersName, usersEmail, usersMessage);
        
        const newMessage = document.createElement('li');
        newMessage.innerHTML = `
            <a href="mailto:${usersEmail}">${usersName}</a>
            <span>${usersMessage}</span>
            `;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.type = 'button';

        removeButton.addEventListener('click', (event) => {
            const listItem = event.target.parentNode;
            listItem.remove();
            toggleMessagesVisibility();
        });

        newMessage.appendChild(removeButton);

        messageList.appendChild(newMessage);

        toggleMessagesVisibility();

        event.target.reset();
    });