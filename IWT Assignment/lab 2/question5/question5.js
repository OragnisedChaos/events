// Define available topics and chapters for each subject
const topics = {
    'Front-end': ['HTML', 'CSS', 'Javascript'],
    'Back-end': ['NodeJS', 'PHP']
  };
  
  const chapters = {
    'HTML': ['Links', 'Images', 'Tables', 'Lists'],
    'CSS': ['Borders', 'Margins', 'Backgrounds'],
    'Javascript': ['Variables', 'Operators', 'Arrays', 'Objects'],
    'NodeJS': ['NPM', 'HTTP', 'Express'],
    'PHP': ['Strings', 'Arrays', 'Regex']
  };
  
  // Get the dropdowns
  const subjectDropdown = document.getElementById('subject');
  const topicDropdown = document.getElementById('topic');
  const chapterDropdown = document.getElementById('chapter');
  
  // Add event listener to the subject dropdown
  subjectDropdown.addEventListener('change', () => {
    // Reset the topic and chapter dropdowns
    topicDropdown.innerHTML = '<option value="">--Select--</option>';
    topicDropdown.disabled = false;
    chapterDropdown.innerHTML = '<option value="">--Select--</option>';
    chapterDropdown.disabled = true;
  
    // Get the selected subject
    const selectedSubject = subjectDropdown.value;
  
    // Populate the topic dropdown based on the selected subject
    topics[selectedSubject].forEach((topic) => {
      const option = document.createElement('option');
      option.text = topic;
      option.value = topic;
      topicDropdown.add(option);
    });
  });
  
  // Add event listener to the topic dropdown
  topicDropdown.addEventListener('change', () => {
    // Reset the chapter dropdown
    chapterDropdown.innerHTML = '<option value="">--Select--</option>';
    chapterDropdown.disabled = false;
  
    // Get the selected topic
    const selectedTopic = topicDropdown.value;
  
    // Populate the chapter dropdown based on the selected topic
    chapters[selectedTopic].forEach((chapter) => {
      const option = document.createElement('option');
      option.text = chapter;
      option.value = chapter;
      chapterDropdown.add(option);
    });
  });
  