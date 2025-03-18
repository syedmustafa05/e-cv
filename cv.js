document.getElementById('downloadResumeBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf'; // Path to the resume PDF file
    link.download = 'Syed_Mustafa_Resume.pdf';
    link.click();
});
