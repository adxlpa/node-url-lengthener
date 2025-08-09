document.addEventListener('DOMContentLoaded', () => {
    const lengthenBtn = document.getElementById('lengthenBtn');
    const resetBtn = document.getElementById('resetBtn'); // New button
    const urlInput = document.getElementById('urlInput');
    const outputDiv = document.getElementById('output');
    const outputUrl = document.getElementById('outputUrl');
    const copyBtn = document.getElementById('copyBtn');
    const copyMessage = document.getElementById('copy-message');
    const errorMessage = document.getElementById('error-message');

    lengthenBtn.addEventListener('click', async () => {
        const originalUrl = urlInput.value.trim();

        errorMessage.textContent = '';
        copyMessage.textContent = '';
        outputDiv.style.display = 'none';

        if (!originalUrl) {
            errorMessage.textContent = 'Please enter a URL.';
            return;
        }

        try {
            const response = await fetch('/api/lengthen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ originalUrl }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            outputUrl.href = data.lengthenedUrl;
            outputUrl.textContent = data.lengthenedUrl;
            outputDiv.style.display = 'block';

        } catch (error) {
            errorMessage.textContent = error.message;
        }
    });

    resetBtn.addEventListener('click', () => {
        urlInput.value = ''; 
        outputDiv.style.display = 'none'; 
        errorMessage.textContent = ''; 
        copyMessage.textContent = ''; 
        urlInput.focus(); 
    });

    copyBtn.addEventListener('click', () => {
        const textToCopy = outputUrl.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyMessage.textContent = 'Copied to clipboard!';
            setTimeout(() => {
                copyMessage.textContent = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            copyMessage.textContent = 'Failed to copy.';
        });
    });
});