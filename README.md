# APARTE (A real estate Web Application)

## Libraries
- Tailwind
- Lucide
- Shad cn
- Clerk for Authentication of users
- hyperui for forms and sign-in ui customization

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
    -  npm install formik --save  formik is a form library
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