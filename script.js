document.getElementById('checkBtn').addEventListener('click', checkPalindrome);
document.getElementById('textInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkPalindrome();
});

function checkPalindrome() {
    const input = document.getElementById('textInput').value.trim();
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    const result = document.getElementById('result');

    if (!input) {
        result.textContent = "⚠️ Please enter some text.";
        result.style.color = "#d9534f";
        return;
    }

    if (cleaned === reversed) {
        result.textContent = `✅ "${input}" is a palindrome!`;
        result.style.color = "#28a745";
    } else {
        result.textContent = `❌ "${input}" is not a palindrome.`;
        result.style.color = "#d9534f";
    }
}
