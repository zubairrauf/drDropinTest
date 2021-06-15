This is a [Next.js](https://nextjs.org/) project to solve a coding test from Dr.Dropin.

## Getting Started

To run the project locally, clone the repository and install npm packages.
Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

The project has an index page and two components. The index page fetches the data at build time and passes it to the Clinics component. Clinics component maps over the data and displays the Card component for each clinic.

The logic for formatting the opening schedule according to the project requirements, is written in the Card component.

## Preview

The project is deployed at https://drdropin.zubairrauf.com/
