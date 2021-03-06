# Angular_Basics

This very simple repository will allow you to understand the basics of the Angular framework !  

**Follow the progress of construction step by step via the progressive commits**

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

6) *optional install Bootstrap* :  

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

### Manage dynamic data    -> Observe on Github via the different commit

1) String interpolation || **{{...}}**
2) Property binding || **constructor() + this.** 
3) Event binding || **(click)="on...()"**
4) Two-way binding || **FormsModule** & **ngModel** 
5) Custom properties || **@Input**  

### Directives  

1) Structural directives || **ngIf, ngFor**
2) Directives by attribute || **ngStyle, ngClass**  

### Pipes  

1) Use **DatePipe** || **{{ lastUpdate | date }}**
2) Chaining pipes || **{{ lastUpdate | date | uppercase}}**  
3) AsyncPipe || **{{... | async | ...}}**  

### --> Enjoy !