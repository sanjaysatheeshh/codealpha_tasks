// Dummy data to simulate issues
const dummyIssues = [
   
  ];
  
  // Function to create an issue
  function createIssue() {
    const title = document.getElementById('issueTitle').value;
    const description = document.getElementById('issueDescription').value;
    const priority = document.getElementById('priority').value;
    const assignedTo = document.getElementById('assignedTo').value;
  
    // Add the new issue to the dummy data
    dummyIssues.push({ title, description, priority, assignedTo });
  
    // Update the issue list
    updateIssueList();
  
    // Clear the form fields
    document.getElementById('createIssueForm').reset();
  }
  
  // Function to update the issue list
  function updateIssueList() {
    const issuesList = document.getElementById('issues');
  
    // Clear existing issues
    issuesList.innerHTML = '';
  
    // Populate the issue list with dummy data
    dummyIssues.forEach((issue) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${issue.title}</strong><br>
                      <em>${issue.description}</em><br>
                      Priority: ${issue.priority}<br>
                      Assigned to: ${issue.assignedTo}`;
      issuesList.appendChild(li);
    });
  }
  
  // Initial update of the issue list
  updateIssueList();
  