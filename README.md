# plugo-fe-assignment

## Project Description

### Project Introduction
- This is a clone of an e-commerce website with an admin feature. The website includes functionality to create, upload, and read a products.  

### Directory Structure
```
src
 ┣ assets
 ┃ ┗ fonts
 ┃ ┃ ┗ cabin
 ┃ ┃ ┃ ┣ Cabin-Bold.ttf
 ┃ ┃ ┃ ┣ Cabin-Medium.ttf
 ┃ ┃ ┃ ┗ Cabin-Regular.ttf
 ┣ components
 ┃ ┣ cart
 ┃ ┃ ┣ CartCard.tsx
 ┃ ┃ ┣ CartModal.tsx
 ┃ ┃ ┗ TotalPriceCard.tsx
 ┃ ┣ common
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┣ Input.tsx
 ┃ ┃ ┗ icons.ts
 ┃ ┣ layout
 ┃ ┃ ┣ header
 ┃ ┃ ┃ ┣ HeaderMenuItems.tsx
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ Footer.tsx
 ┃ ┃ ┣ ReSizeProvider.tsx
 ┃ ┃ ┣ SideBar.tsx
 ┃ ┃ ┣ SideBarMobile.tsx
 ┃ ┃ ┗ index.tsx
 ┃ ┗ products
 ┃ ┃ ┗ ProductCard.tsx
 ┣ constants
 ┃ ┣ footerIcons.ts
 ┃ ┗ url.ts
 ┣ hooks
 ┃ ┗ useSortedData.ts
 ┣ pages
 ┃ ┣ AdminPage.tsx
 ┃ ┣ CartPage.tsx
 ┃ ┣ HomePage.tsx
 ┃ ┣ NotFoundPage.tsx
 ┃ ┣ ProductDetailPage.tsx
 ┃ ┗ ProductListPage.tsx
 ┣ router
 ┃ ┗ index.tsx
 ┣ services
 ┃ ┗ index.ts
 ┣ store
 ┃ ┗ atom.ts
 ┣ styles
 ┃ ┗ GlobalStyles.tsx
 ┣ types
 ┃ ┗ index.d.ts
 ┣ App.tsx
 ┣ main.tsx
 ┣ testData.ts
 ┗ vite-env.d.ts
```

## Project Information
## Getting Started / Installation
### Install Dependencies
```
yarn 
```
### Run in Development Environment
```
yarn dev
```

## Tech Stack
### client
- `TypeScript`
- `react`
- `vite`
- `react-query`
- `react-router-dom`
- `recoil`
- `styled-components`

### server
- `aws serverless`
- `S3 for image handling`
- `vercel`

## MVP
- [x] Admin: Create Product
- [x] Product List
- [x] Product Detail Page
- [x] Add to Cart Button
- [x] Cart Detail Page

## Project Results
- Deployment Site : https://plugo-fe-assignment-qtpk4ubma-sgsg9447.vercel.app/

- Home Page, Product List, Product Detail, Add to Cart Button, Cart Detail Page
    - ![2](https://github.com/sgsg9447/plugo-fe-assignment/assets/87474789/cc91d9a7-a628-4a73-b6a2-3e83c69f216f)

- Admin: Create Product
    - ![3](https://github.com/sgsg9447/plugo-fe-assignment/assets/87474789/d6b7063d-6a7b-4095-9e46-4a3f9f029434)

- Product List : Sort
    - ![4](https://github.com/sgsg9447/plugo-fe-assignment/assets/87474789/49a9716b-6eef-44b8-bb91-1c121b35c9d0)

- Responsive UI
    - ![5](https://github.com/sgsg9447/plugo-fe-assignment/assets/87474789/4708d646-ad65-48f9-a13e-9a945ddde57b)


## Project Consideration
- Reusable component 
    - Button, Input
- Responsive UI
    - ResizeProvider Component Separation
- Image
    - S3 Buckets
- Backend API
    - aws serverless
    - DynamoDB
    
