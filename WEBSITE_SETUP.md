# ACM Official Website - Setup Guide

## Completed Pages

All major pages for the ACM official website have been created and integrated:

### ✅ Pages Completed:
1. **Home** (`/`) - Hero section with info cards and team showcase
2. **About Us** (`/aboutus`) - Mission, vision, values, and history
3. **Events** (`/events`) - Upcoming events with registration
4. **Gallery** (`/gallery`) - Photo gallery with category filtering
5. **Blog** (`/blog`) - Blog posts and articles
6. **Membership** (`/membership`) - Pricing plans and benefits
7. **Team** (`/team`) - Team members showcase
8. **Contact Us** (`/contactus`) - Contact form and information

---

## Placeholders to Fill In

### Contact Information
Replace these placeholders in the following files:

**In `src/pages/contactus.jsx`:**
- `[CONTACT_EMAIL]` - Your ACM email address
- `[CONTACT_PHONE]` - Your ACM phone number
- `[LOCATION_ADDRESS]` - Your office/meeting location
- `[START_TIME]` - Office hours start time
- `[END_TIME]` - Office hours end time

**In `src/pages/membership.jsx`:**
- `[PRICE]` - Membership plan prices for each tier
- `[CONTACT_EMAIL]` - Support email
- `[CONTACT_PHONE]` - Support phone number

**In `src/pages/events.jsx`:**
- `[DATE]` - Event dates
- `[TIME]` - Event times
- `[LOCATION]` - Event locations
- `[NUMBER]` - Expected attendee numbers

**In `src/pages/aboutus.jsx`:**
- `[YEAR]` - Year ACM was founded

---

## Image Placeholders

### Gallery Page (`src/pages/gallery.jsx`)
Replace image placeholders with actual images:
- `[IMAGE_PLACEHOLDER_1]` through `[IMAGE_PLACEHOLDER_8]`

The gallery currently shows placeholder boxes. Add your event photos to:
- `src/assets/` folder
- Update the `image` field in the `galleryItems` array

### Contact Page (`src/pages/contactus.jsx`)
- Map integration placeholder - Consider adding Google Maps or Mapbox
- Location image placeholder

---

## How to Add Images

1. Place your images in `src/assets/` folder
2. Import them in the respective page files
3. Replace the placeholder text with actual image imports

Example:
```jsx
import eventImage1 from "../assets/event1.jpg";

// Then use in the gallery items:
{
  id: 1,
  image: eventImage1,
  // ...
}
```

---

## Styling Features

All pages include:
- ✨ Smooth animations with Framer Motion
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Gradient backgrounds and modern UI
- ♿ Accessible components

---

## Next Steps

1. **Fill in all placeholders** with actual ACM information
2. **Add images** to the gallery and other pages
3. **Configure contact form** backend (currently logs to console)
4. **Add map integration** to contact page
5. **Update team members** in the Team component
6. **Customize colors** if needed in Tailwind config

---

## File Structure

```
src/
├── pages/
│   ├── home.jsx          ✅ Existing
│   ├── aboutus.jsx       ✅ New
│   ├── events.jsx        ✅ New
│   ├── gallery.jsx       ✅ New
│   ├── membership.jsx    ✅ New
│   ├── teampage.jsx      ✅ New
│   ├── contactus.jsx     ✅ New
│   └── ComingSoon.jsx    (Backup)
├── components/
│   ├── Team/
│   ├── Event/
│   ├── Home/
│   ├── Photo/
│   ├── Blogs/
│   └── ui/
└── assets/               (Add images here)
```

---

## Running the Website

```bash
npm run dev
```

Visit `http://localhost:5173` to see your website.

---

## Contact Form Integration

The contact form currently logs data to console. To make it functional:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function in `src/pages/contactus.jsx`
3. Add email service integration (SendGrid, Nodemailer, etc.)

---

## Support

For questions or issues, refer to the component files and update as needed.
