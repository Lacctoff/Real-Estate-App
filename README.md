# APARTE (A real estate Web Application)

Aparte is a modern real estate web application designed to help users find houses or apartments for sale or rent. It offers a range of features, including an agent finder, search capabilities with Google Maps integration, and the ability to post ads. Users can sign in using email, Facebook, or Google for a seamless experience.

## Features

- Browse Listings: View houses or apartments that are for sale or rent.
- Agent Finder: Locate housing agents closest to your area.
- Advanced Search: Search for cities with available properties for sale or rent, complete with Google Maps location.
- Post Ads: Post your own advertisement to sell or rent a property.
- User Authentication: Sign in with email, Facebook, or Google.

## Tech Stack

Aparte is built using the following libraries and technologies:

- Next.js: A React framework for building server-side rendered applications.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Lucide: A collection of simple and beautiful icons.
- Shad cn: A set of components and utilities for building UI.
- Clerk: Authentication and user management.
- HyperUI: Pre-designed components for forms and sign-in UI customization.
- Formik: A library for building and managing forms.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

- Clone the repository:
  git clone https://github.com/yourusername/aparte.git
  cd aparte

### Install dependencies:

- npm install
  or yarn install

### Set up environment variables:

- Create a .env.local file in the root directory and add your environment variables. Example:
  NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<your-google-maps-api-key>

## Running the App

### To run the development server:

npm run dev
or
yarn dev.
Open http://localhost:3000 in your browser to see the app.

## Building for Production

### To create a production build:

npm run build or
yarn build

### To start the production server:

npm start
or
yarn start

## Project Structure

.
├── components
│ ├── AgentFinder.js
│ ├── Listings.js
│ ├── Map.js
│ ├── Navbar.js
│ ├── PostAd.js
│ └── SignIn.js
├── pages
│ ├── api
│ ├── auth
│ │ ├── signin.js
│ │ └── signup.js
│ ├── index.js
│ ├── \_app.js
│ └── \_document.js
├── public
│ ├── images
│ └── icons
├── styles
│ ├── globals.css
│ └── tailwind.css
├── utils
│ └── api.js
├── .env.local
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md

## Second commit properties

- Backend Setup with supabase
  ### setup
  - supabase.com
  - npm i @supabase/supabase-js
  - create Add-listing page and also editing listing
  - Google place autocomplete
  - npm i react-google-places-autocomplete
  - a toast( npx shadcn-ui@latest add sonner )
  - A radio input from shad-cn (npx shadcn-ui@latest add radio-group )
  - A label from shad-cn (npx shadcn-ui@latest add label)
  - npx shadcn-ui@latest add select
  - npx shadcn-ui@latest add input
  - npx shadcn-ui@latest add textarea
  - npm install formik --save formik is a form library
  - why formik?
    - Formik keeps track of your form's state and then exposes it plus a few reusable methods and event handlers (handleChange, handleBlur, and handleSubmit) to your form via props.

## Third commit properties

- using useState() hook & defaultValue we made sure that what ever 6the user has selected stays on the screen
- image Upload functionality

  ### TODO

  - go to storage in supabase
  - create new bucket [listingImages] & and toggle it to public
  - save and create new policy full customization
  - tick all boxes including INSERT, UPDATE e.t.c
  - Name the Policy [Public] then review and save policy
  - Goto [Table Editor] create new table add columns and click on foreign key and connect the listing id with the id

  ### for uploading file we need to create

        -in the edit-listing folder create a _components folder and a FileUpload.jsx
        - search on google for tailwind css file upload click on Tailwind CSS File Input
        - implement the code into yours in the FileUpload.jsx, and tweak the input, allow for multiple file selections and images,gif's only
        - we need to send a res to supabase base when we upload the images
        - don't forget to add into your next.config.mjs the third party domain of the images.

### Fourth commit properties

    ### Publish Listing
        - at the click of save button we need a dialogue to ask if we truly want to save/publish the listing
        - goto shad-cn and chechk out the alert dialogue and implement it

## Fifth commit properties

    ### display listing on Home
    fetch data from the supabase backend api
    Map through the objects and style accordingly

## sixth commit properties

    ### Adding skeleton loading effects on page load on home screen and also
    adding the search functionality

## Usage

### Authentication:

Aparte uses Clerk for user authentication. You can sign in with email, Facebook, or Google.

### Posting an Ad

- Sign in to your account.
- Navigate to the "Post Ad" section.
- Fill out the form with property details.
- Submit your ad for review and listing.

### Searching for Properties

- Use the search bar to enter a city or region.
- Browse the results, which are displayed with Google Maps integration.
- Click on a listing to view more details.

### Finding an Agent

- Go to the "Agent Finder" section.
- Allow location access for more accurate results.
- Browse through the list of agents closest to your area.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the existing code style and includes relevant tests.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact yourname@example.com.

##

Thank you for using Aparte! We hope you find your dream home or the perfect tenant for your property.
