const jobs = [
    {
        "jobTitle": "Cardiovascular ICU Nurse",
        "company": "Memorial Hospital",
        "location": "New York",
        "description": "Experience Cardiovascular ICU Nurse (CVICU) with two plus years of experience in a clinical role.",
        "salary": 125000,
        "jobType": "Full Time"
    },
    {
        "jobTitle": "Travel Nurse - Emergency Room",
        "company": "Apex Travel Nursing",
        "location": "Los Angeles",
        "description": "Must have three years of experience in an emergency room department in a large hospital setting.",
        "salary": 95000,
        "jobType": "Part Time"
    },
    {
        "jobTitle": "Oncology Nurse",
        "company": "Lutheran Hospital",
        "location": "Austin",
        "description": "Seeking a oncology nurse with at least 5 years of experience with working in a hematology department.",
        "salary": 150000,
        "jobType": "Full Time"
    },
    {
        "jobTitle": "Travel Nurse - Psych Specialization",
        "company": "Apex Travel Nursing",
        "location": "San Francisco",
        "description": "Seeking a part-time psych registered nurse with at least a year of experience working with psychiatrists.",
        "salary": 150000,
        "jobType": "Part Time"
    }
];

function displayJobs(jobs) {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';

    jobs.forEach((job, index) => {
        if (index % 2 === 0) {
            // Create a new row
            const jobRow = document.createElement('div');
            jobRow.classList.add('job-row');
            jobList.appendChild(jobRow);
        }

        // Get the last row
        const jobRows = document.querySelectorAll('.job-row');
        const currentRow = jobRows[jobRows.length - 1];

        // Create job card
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h2>${job.jobTitle}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Salary:</strong> $${job.salary}</p>
            <p><strong>Job Type:</strong> ${job.jobType}</p>
        `;

        currentRow.appendChild(jobCard);
    });
}

function filterJobs() {
    const filterSalary = document.getElementById('filterSalary').value;
    const filterLocation = document.getElementById('filterLocation').value.toLowerCase();
    const filterJobType = document.getElementById('filterJobType').value.toLowerCase();

    const filteredJobs = jobs.filter(job => {
        return (job.salary >= filterSalary) &&
               (job.location.toLowerCase().includes(filterLocation)) &&
               (filterJobType === '' || job.jobType.toLowerCase() === filterJobType);
    });

    displayJobs(filteredJobs);
}

displayJobs(jobs);

document.getElementById('filterSalary').addEventListener('input', filterJobs);
document.getElementById('filterLocation').addEventListener('input', filterJobs);
document.getElementById('filterJobType').addEventListener('change', filterJobs);

document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const salary = document.getElementById('salary').value;
    const jobType = document.getElementById('jobType').value;

    jobs.push({
        jobTitle: jobTitle,
        company: company,
        location: location,
        description: description,
        salary: parseInt(salary),
        jobType: jobType
    });

    displayJobs(jobs);

    document.getElementById('jobForm').reset();
});