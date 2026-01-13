# Copilot Instructions for Portfolio Project

## Project Overview
A personal portfolio website showcasing Kiran's web development services (web development, WordPress, PHP/Laravel). Single-page HTML site with custom CSS styling and minimal JavaScript.

## Architecture & Key Patterns

### File Structure
- **[Index.html](Index.html)**: Single entry point; contains all HTML sections (header nav, parallax hero, intro, services, portfolio sections)
- **[assets/css/](assets/css/)**: Three CSS files - `bootstrap_5.css` (included framework), `style.css` (custom styling), `loader.css` (preloader animations)
- **[assets/js/](assets/js/)**: `loader.js` (preloader hide logic), `main.js` (currently empty; reserved for future interactions)
- **[assets/images/](assets/images/)**: Service icons in `services/` subdirectory, parallax background images

### Design System
- **Color Scheme**: Pure black backgrounds (`#000`, `#0a0a0a`, `#0d0d0d`) with white text and grays (`#898989`, `#8f8f8f`)
- **Typography**: Montserrat font family for headings; consistent use of uppercase text with letter-spacing
- **Visual Elements**: 
  - Parallax scrolling backgrounds (fixed attachment, cover sizing)
  - Corner decorative elements on service cards (`.corner` divs)
  - Accent styling for "selected" service (darker background)
  - Nested containers for layered positioning (e.g., `.box-seat` with `.inner-img` + `.pro-text`)

### CSS Conventions
- CSS Variables for colors (e.g., `--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d`)
- BEM-inspired class names (`.services-item`, `.title-sub-container`, `.parallax-content`)
- Utility classes for spacing (`.section-margin`, `.p-relative`)
- Negative positioning for stacked layouts (e.g., `.pro-text { right: 80px; bottom: -80px; }`)

### HTML Patterns
- **Data Attributes**: `data-dsn-animate="animate"`, `data-dsn-grid="moveUp"`, `data-dsn-scale="1"`, `data-dsn-y="30%"` (likely for animation framework integration)
- **Bootstrap Structure**: Container > row > col-* layout for responsiveness
- **Semantic Nesting**: Services in cards with icon, header, description structure
- **Accessibility**: `aria-hidden="true"` on decorative elements, `aria-label` on togglers

## Development Workflow & Commands
- **No build system**: This is a static HTML project—changes to HTML/CSS/JS are immediately visible
- **Testing**: Open [Index.html](Index.html) in browser; check preloader fade-out (500ms delay) and responsive nav collapse
- **Asset Linking**: All asset paths are relative (`assets/css/`, `assets/js/`, `assets/images/`)
- **External Dependencies**: Font Awesome 7.0.1 via CDN, Bootstrap 5 (custom CSS/JS bundled locally)

## When Adding Features
- **New Sections**: Follow parallax + section-margin + container > row > col pattern
- **New Services**: Duplicate `.services-item` block; apply `.selected` class for highlighting
- **Interactive Elements**: Place JS in [main.js](assets/js/main.js); use data attributes for framework hooks
- **Images**: Store in `assets/images/` with descriptive names; update `src` paths accordingly
- **Styling**: Add rules to [style.css](assets/css/style.css) using existing color/font variables and class naming conventions

## Important Notes
- **Preloader**: Automatically hidden on page load by [loader.js](assets/js/loader.js)—do not remove or modify without testing
- **Animation Framework**: Data attributes suggest an external animation library (DSN-based); inspect HTML attributes before adding custom JS
- **Portfolio Sections**: Projects section is commented out; uncomment and populate as needed
- **Responsive Design**: Bootstrap grid system handles breakpoints; test on mobile/tablet when modifying layouts
