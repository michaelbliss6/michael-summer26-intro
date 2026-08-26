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
            <button class="remove-btn">Remove</button>
            `;

        messageList.appendChild(newMessage);

        toggleMessagesVisibility();

        event.target.reset();
    });

    messageList.addEventListener('click', (event) => {
  // EDIT clicked
  if (event.target.classList.contains('edit-btn')) {
    const listItem = event.target.parentElement;
    const span = listItem.querySelector('span');
    const currentText = span.textContent;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;

    span.replaceWith(input);
    input.focus();

    event.target.textContent = 'Save';
    event.target.classList.remove('edit-btn');
    event.target.classList.add('save-btn');
  }

  // SAVE clicked
  else if (event.target.classList.contains('save-btn')) {
    const listItem = event.target.parentElement;
    const input = listItem.querySelector('input');
    const newText = input.value;

    const span = document.createElement('span');
    span.textContent = newText;

    input.replaceWith(span);

    event.target.textContent = 'Edit';
    event.target.classList.remove('save-btn');
    event.target.classList.add('edit-btn');
  }
// REMOVE clicked
  else if (event.target.classList.contains('remove-btn')) {
    const listItem = event.target.parentElement;
    listItem.remove();
    toggleMessagesVisibility();
  }

});