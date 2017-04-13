alert("Uw account is verwijderd.");
document.getElementById('Body').innerHTML = 'Neem contact op met uw netwerkbeheerder';

function ReplaceContent() {
document.write('<html><body>Neem contact op met uw netwerkbeheerder</body></html>');
document.close();
}
function replacer() {
ReplaceContent();
}
window.onload = replacer