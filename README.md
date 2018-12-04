October CMS Webpack Theme Boilerplate
==========

This is an example theme for October CMS that includes:

- npm (using laravel mix)
- bootstrap
- fontawesome
- jquery
- autoprefixer

To use it:

- [Install October CMS](https://octobercms.com/docs/setup/installation)
- Create a new folder in October /themes folder (call it for example my-awesome-theme)
- Clone the repo in your theme folder
- Activate the theme from October backend settings

To modify it:
- Open a terminal, go to your theme folder and run `npm install` (node_modules folder will be created)
- Install more packages using `npm install --save`
- Require your installed packages in src/js/app.js
- Modify the js and scss files
- Run `npm run dev` (`npm run watch` to recompile when something changes)
- [Add new pages, partials, content files...](https://octobercms.com/docs/cms/themes)
- Run `npm run prod` when you are ready for production

When you are ready for production:

- Run `npm run prod`
- You don't need to upload node_modules and src folders to the production host if you don't compile your assets there

Enjoy!