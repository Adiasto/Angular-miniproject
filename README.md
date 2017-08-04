# Angular2-app
This is a basic Angular-2 app with stable CLI version. Angular-CLI command now creates new project with only Angular version-4. This project serves purpose for starting a new Angular project from scratch with Angular version-2 coupled with stable CLI upgrade changes [Angular-CLI version 1.1.2].

#PreRequisites: Angular 2 installation steps :
NOTE : Linux users need to use sudo before any installation commands mentioned below

1. Install node.js version v6.9+ download it from here https://nodejs.org/en/download/
   For Ubuntu use following commands :
   a) curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
   b) sudo apt-get install -y nodejs

2. To check installed node version --> node -v

3. Update the npm (node package manger) -> npm install npm@latest -g
   Make sure you have NPM version 3 or higher

4. Install typescript via NPM -> npm install -g typescript@2.0.6
5. Check your typescript version after installation -> tsc --version
6. Install angular-cli -> npm install -g @angular/cli@1.1.2
7. Check your node and angular/cli version after installation -> ng -v

#Steps to run Application in development mode:
1) Clone/Pull/Checkout project in a folder.
2) Open terminal/command prompt, and go to directory having package.json
3) Install all the dependencies of the project as specified in package.json using 		-> npm install,
4) Start/Run the application using														-> ng serve
5) Open browser, navigate to url -> http://localhost:4200

#Important commands to create new angular 2 elements/modules/components:
1) Component	    ng g component my-new-component
2) Directive	    ng g directive my-new-directive
3) Pipe	            ng g pipe my-new-pipe
4) Service	        ng g service my-new-service
5) Class	        ng g class my-new-class
6) Interface	    ng g interface my-new-interface
7) Enum	            ng g enum my-new-enum
9) Module	        ng g module my-module
