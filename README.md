# MunchRun Website Documentation

## Project Overview

MunchRun Website is a platform designed to connect restaurants, drivers, and customers, facilitating efficient food delivery services. The website provides dedicated sections for drivers and restaurants, outlining the benefits of joining MunchRun and providing tools and information to help them succeed.

## Features

*   **Homepage:**  Provides a general overview of MunchRun, its vision, how it works, and customer comparisons.
*   **Driver Page:**  Dedicated section for drivers, featuring:
    *   Earnings calculator
    *   Comparison tools to highlight benefits
    *   FAQ and requirements sections
    *   Call-to-action to join as a driver
*   **Restaurant Page:** Dedicated section for restaurants, featuring:
    *   Benefits and comparison sections
    *   FAQ and how-it-works sections
    *   Call-to-action to partner with MunchRun
*   **About Page:** Information about the company and its mission.
*   **Contact Page:**  Contact form for inquiries.
*   **FAQ Page:**  Frequently asked questions for general users.

## Technologies Used

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **CSS Framework:** Tailwind CSS, DaisyUI
*   **Routing:** React Router DOM
*   **SEO:** React Helmet
*   **Icons:** React Icons

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd MunchRun-Website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Open in browser:** Navigate to `http://localhost:5173` in your browser.

## Component Documentation

### Core Components

*   **App:**  The main application component, likely responsible for routing and layout.
*   **ErrorBoundary:**  Component to handle and display error messages gracefully.
*   **Footer:**  The website footer, containing copyright information and links.
*   **Header:**  The website header, including navigation links and potentially logo.
*   **SEOHelmet:**  Component for managing SEO meta tags.

### Page Components

*   **HomePage:**  Component for the main landing page.
*   **DriverPage:** Component for the driver-focused page.
*   **RestaurantPage:** Component for the restaurant-focused page.
*   **AboutPage:** Component for the about us page.
*   **ContactPage:** Component for the contact page.
*   **FAQPage:** Component for the frequently asked questions page.
*   **NotFoundPage:** Component to display when a requested page is not found (404 error).

### Home Page Sections

*   **HeroSection:**  The main banner section of the homepage.
*   **VisionSection:** Section on the homepage outlining the company's vision.
*   **HowItWorks:** Section explaining how MunchRun works on the homepage.
*   **CustomerComparison:** Section comparing MunchRun to competitors for customers.
*   **ContactSection:** Contact section on the homepage.
*   **FaqSection:** FAQ section on the homepage.

### Driver Page Components

*   **DriverHero:**  Hero section for the driver page.
*   **DriverContent:** Main content area for the driver page.
*   **DriverCTA:** Call-to-action component for drivers.
*   **DriverStats:** Component to display statistics relevant to drivers.
*   **DriverComparison:** Comparison section for drivers.

    *   **comparison**:
        *   **BenefitsCards:** Cards displaying benefits for drivers in the comparison.
        *   **ExampleSelector:** Component to select examples in the driver comparison.
        *   **InputControls:** Input controls for the driver comparison.
        *   **MEGExplanation:** Explanation of MEG in the driver comparison.
        *   **MonthlyProjection:** Monthly projection component in the driver comparison.
        *   **ResultsComparison:** Component to display comparison results for drivers.
        *   **TierSelector:** Tier selector component in the driver comparison.

    *   **calculators**:
        *   **EarningsCalculator:** Calculator to estimate driver earnings.
        *   **DriverCalculatorTypes:** Types related to driver calculators.

    *   **tabs**:
        *   **EarningsTab:** Tab displaying earnings information for drivers.
        *   **FaqTab:** FAQ tab for drivers.
        *   **HowItWorksTab:** How it works tab for drivers.
        *   **RequirementsTab:** Requirements tab for drivers.

### Restaurant Page Components

*   **RestaurantHero:** Hero section for the restaurant page.
*   **RestaurantCTA:** Call-to-action component for restaurants.
*   **RestaurantBenefits:** Benefits section for restaurants.
*   **RestaurantComparison:** Comparison section for restaurants.
*   **RestaurantFAQ:** FAQ section for restaurants.
*   **RestaurantHowItWorks:** How it works section for restaurants.


### Contexts

*   **ThemeContext:** Context for managing the website's theme.

### Utils

*   **scrollUtils:** Utility functions related to scrolling.

### Styles

*   **smoothScroll.css:** CSS for smooth scrolling.

### Scripts

*   **generate-sitemap.js:** Script to generate the sitemap.

This documentation provides a high-level overview of the MunchRun Website project. For more detailed information, please refer to the source code.
