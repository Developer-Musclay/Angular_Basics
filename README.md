# Angular_Basics
Angular bases

### init :  

1) Download latest version of **node js**  

2) Download latest version of **npm** :  

`npm install -g npm@latest`  

3) Install the **Angular CLI** (“Command Line Interface”) globally :  

`npm install -g @angular/cli`  

4) Create a new project :  

`ng new my-new-project`  

5) start the development server :  

` ng serve --open`  

6) *optional* install Bootstrap :  

`npm i bootstrap`  

in the angular.json file, "architect / build / options", modify "styles" : `"styles": [  
            "./node_modules/bootstrap/dist/css/bootstrap.css",  
            ]`  

7) rxjs compat for compatibility of observables :  

`npm install rxjs-compat --save`  

  
### Create a component  

`ng generate component componentName`  
ou  
`ng g c componentName`  

### Manage dynamic data  

1) String interpolation