# Blog Web App

Developed a user-friendly blog web app using React, offering seamless Create, Read, Update, and Delete (CRUD) functionalities for blog posts. Implemented robust authentication features, including sign-in, sign-up, and logout, along with user-friendly authentication-based routing for a smooth and intuitive interface.

Link : https://advance-blog-app.vercel.app/

### Dashboard
![Screenshot (817)](https://github.com/PriyankaBtech/JavaScript_Fundamentals/assets/109729930/f7d1ac56-6fbb-4733-ba0f-3dbf533add63)

### Sign-up Page
![Screenshot (816)](https://github.com/PriyankaBtech/JavaScript_Fundamentals/assets/109729930/510d26df-926b-47af-9766-ad32ceb19382)

### Sign-in Page
![Screenshot (815)](https://github.com/PriyankaBtech/JavaScript_Fundamentals/assets/109729930/cc9bc192-a536-4ac9-a1c6-91b1ecfc70df)


## Features 





### Setup Instructions

1. Clone the Project
```
https://github.com/PriyankaBtech/AdvanceBlogApp.git
```

2. Move into the Directory

```
cd BlogApp
```

3. Install Dependencies

```
npm install
```

4. Run the server

```
npm run dev
```



### Add Plugins and Dependencies

```
npm install @reduxjs/toolkit @tinymce/tinymce-react appwrite eslint-plugin-simple-import-sort html-react-parser react-redux react-router-dom react-hook-form
```



### Setup instructions for tailwindcss

1. Install tailwindcss

```
npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file

```
npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
"./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
```

4. Add the tailwind directives at the top of the index.css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add the following details in the plugin property of tainwind config

```
[require("daisyui"), require("@tailwindcss/line-clamp")]
```



### Configure auto import sort eslint

1. Import simple import sort

```
npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
'simple-import-sort/imports' : 'error'
```

3. Add simple import sort plugin in `.eslint.cjs`

```
plugins: [... , 'simple-import-sort']
```

4. To enable auto import sort in vscode
  
  - open settings.json
  - add the followig config
```
 "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```




