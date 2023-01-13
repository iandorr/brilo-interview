# How to Build and Run the Project

## Prerequisites
-Node.js and npm should be installed on your system
-Familiarity with the command line interface

## Steps
1. Clone the project from the repository and navigate to the project directory in the command line interface.
2. Install the dependencies by running npm install in the project directory.
3. Start the development server by running npm run dev. This will start the development server and open the project in the browser.
4. Make changes to the code and see the changes in real-time in the browser. Vite automatically hot-reloads the code and updates the browser, so you don't have to manually refresh the page.
5. Build the project for production by running npm run build. This will create a production-ready build of the project in the dist folder.
6. Run the production build by running npm start. This will start a server and serve the production build of the project.
7. Deploy the project by copying the files from the dist folder to your production server.

## About
This project does not use SASS-BEM naming convention for styling, it is using Styled Components for styling the components.
TypeScript is also not used originally, can rewrite the code if needed

## Tips
- If you run into any issues with Vite, try uninstalling and reinstalling it by running npm uninstall vite and npm install vite@latest.
- To change the port on which the development server runs, you can add a .viterc file in the root of your project and specify the port number, for example: port = 3000.
- To add custom configurations to vite, you can also add a vite.config.js in the root of your project.
- If you have any issues with the dependencies, you can try deleting the node_modules folder and running the install command again.

###### That's it! With this, you should be able to build and run your project with Vite. If you have any issues or questions, feel free to reach out for help.
