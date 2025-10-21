// ========================================
// CONTACT FORM VALIDATION
// ========================================

// Get form elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const subjectInput = document.getElementById('contact-subject');
const messageInput = document.getElementById('contact-message');
const successMessage = document.getElementById('success-message');

// Get error message elements
const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const subjectError = document.getElementById('error-subject');
const messageError = document.getElementById('error-message');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
function validateName() {
    const value = nameInput.value.trim();
    
    if (value === '') {
        showError(nameInput, nameError, 'Full name is required');
        return false;
    } else if (value.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        return false;
    } else {
        clearError(nameInput, nameError);
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    
    if (value === '') {
        showError(emailInput, emailError, 'Email is required');
        return false;
    } else if (!emailRegex.test(value)) {
        showError(emailInput, emailError, 'Please enter a valid email (e.g., name@example.com)');
        return false;
    } else {
        clearError(emailInput, emailError);
        return true;
    }
}

function validateSubject() {
    const value = subjectInput.value.trim();
    
    if (value === '') {
        showError(subjectInput, subjectError, 'Subject is required');
        return false;
    } else if (value.length < 3) {
        showError(subjectInput, subjectError, 'Subject must be at least 3 characters');
        return false;
    } else {
        clearError(subjectInput, subjectError);
        return true;
    }
}

function validateMessage() {
    const value = messageInput.value.trim();
    
    if (value === '') {
        showError(messageInput, messageError, 'Message is required');
        return false;
    } else if (value.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        return false;
    } else {
        clearError(messageInput, messageError);
        return true;
    }
}

// Helper functions
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}

// Real-time validation (as user types)
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

// Form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    
    // If all valid, show success message
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Hide the form
        form.style.display = 'none';
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Log form data (in real app, this would send to server)
        console.log('Form submitted successfully!');
        console.log({
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
        });
        
        // Optional: Reset form after 3 seconds and show it again
        // setTimeout(() => {
        //     form.reset();
        //     form.style.display = 'block';
        //     successMessage.style.display = 'none';
        // }, 3000);
    } else {
        // Focus on first invalid field
        if (!isNameValid) nameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else if (!isSubjectValid) subjectInput.focus();
        else if (!isMessageValid) messageInput.focus();
    }
});