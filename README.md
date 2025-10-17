# Profile Card Project

A responsive, accessible profile card component built with HTML, CSS, and vanilla JavaScript.

## 🌟 Features

- ✅ Semantic HTML structure
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible (WCAG compliant)
- ✅ Live current time display
- ✅ Image upload functionality
- ✅ Smooth animations and transitions
- ✅ Keyboard navigation support

## 🚀 Live Demo

[Live Demo](https://stage0-profile-card.netlify.app/)

## 📸 Screenshots

### Mobile View

![Desktop View](screenshots/desktop.png)

### Desktop View

![Mobile View](screenshots/mobile.png)

## 🛠️ Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Media Queries)
- Vanilla JavaScript (ES6+)

## 📋 Required Elements

All elements include proper `data-testid` attributes for testing:

- ✅ `test-profile-card` - Main container
- ✅ `test-user-name` - User's name
- ✅ `test-user-bio` - Biography
- ✅ `test-user-time` - Current time in milliseconds
- ✅ `test-user-avatar` - Profile image
- ✅ `test-user-social-links` - Social media links container
- ✅ `test-user-hobbies` - Hobbies list
- ✅ `test-user-dislikes` - Dislikes list

## 🎨 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on interactive elements
- Alt text on images
- Screen reader friendly

## 🔧 Local Setup

1. Clone this repository:

```bash
   git clone https://github.com/YOUR_USERNAME/profile-card.git
```

2. Navigate to project folder:

```bash
   cd profile-card
```

3. Open `index.html` in your browser:

```bash
   # On Mac
   open index.html

   # On Windows
   start index.html

   # Or just double-click the file
```

## 📁 Project Structure

```
profile-card/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🧪 Testing

All interactive elements include `data-testid` attributes for automated testing.

### Manual Testing Checklist:

- [ ] Profile card displays correctly on mobile
- [ ] Profile card displays correctly on tablet
- [ ] Profile card displays correctly on desktop
- [ ] Current time updates every second
- [ ] Image upload works and previews correctly
- [ ] All social links open in new tabs
- [ ] Keyboard navigation works (Tab key)
- [ ] Focus indicators are visible
- [ ] Hover effects work on interactive elements

## 📝 Customization

To customize with your own information:

1. **Update personal info in `index.html`:**

   - Change name in `<h1>`
   - Update bio in `<p>`
   - Replace social media URLs
   - Modify hobbies and dislikes

2. **Change colors in `styles.css`:**

   - Primary blue: `#2563eb`
   - Accent red: `#dc2626`
   - Background gray: `#f0f0f0`

3. **Upload your own avatar:**
   - Click "📷 Change Avatar" button
   - Or replace placeholder URL in HTML

## 🚀 Deployment

This project can be deployed to:

- Netlify (drag and drop)
- GitHub Pages
- Vercel
- Any static hosting service

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Naana Shifah - [Your GitHub](https://github.com/Anonymous2024-spec/)

## 🙏 Acknowledgments

- Built as part of Stage 0 training
- Inspired by modern profile card designs
