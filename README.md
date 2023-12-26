# Blog Web App

A simple blog web app using Appwrite(backend as service). In this app you can easily create, read, update, and delete blog posts (CRUD operations). This app also includes features like user authentication (signin, signup, logout) and authentication-based routing with user friendly interface.


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




