# Academia 

### App Demo: (Academia App)[https://academia-app-proj.herokuapp.com/]


### What is this app about?
Two page courses application built for an interview task.

### Tech Stack & Tools:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) 
[<img src="https://assets-global.website-files.com/6009f6f109d51e60b911ba53/606e2c19fbba751849f85f40_mockaroo-logo.png" alt="DeltaX" width="130"/>](https://matching.turing.com/developer-resume-preview/38733982a54ea61a863db2e63c38d28eb779daf65269)

### Functionalities:
Create a simple application for an admin in a University to manually choose courses for students.
Where in as a admin i should be able to
1. See the list of students 
2. Click on a student's profile 
   - And should be able to check the details about the courses that student has selected.
   -  And should be able to add new courses for the student.

### Prerequisites:
- Install Xampp  [Xampp Docs](https://www.apachefriends.org/index.html) 
- Start Xampp Server

![XAMPP Control Panel](https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Screenshots/EN_XAMPP_Control_Panel_2.PNG)
   
### To setup Backend:
There is a seperate repository for the server here :point_right:  [academia-server-repo](https://github.com/akshay-devadiga/academia-server)
###### Step I: 
1. Click on Admin option in the xamp control panel and open phpmyadmin.
2. Create a new database with name ```academia```.
3. Run the queries from the sql file present in the server repository.

![XAMPP Control Panel](https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Screenshots/EN_XAMPP_phpMyAdmin.PNG)
###### Step II: 
Clone the server repository
###### Step III: 
Run ```npm install or yarn install ``` to install all of the packages
###### Step IV: 
Run ```nodemon app.js ```
Note: Default port no is 3000. You can update the port in app.js if necessary.


### To setup Frontend:
###### Step I: 
Clone the repository
###### Step II:
Run ```npm install or yarn install ``` to install all of the packages
###### Step III: 
Run ```npm start ```

Note: Please verify if the server is up at 3000 or update the port number in services - index.js file.


### Here is how i planned the planning doc/whimsical:

[Planning Doc](https://whimsical.com/mainteny-task-9f64ySwEoporBFW9nMQEY3) 





Thank you for providing me this opportunity. I really enjoyed working on it. :)







Tasks
- [x] Finalize the stack,libraries to be used.
- [x] Create a prototype in figma.
- [x] Design /Research the architecture for the App.
- [x] Build the server app.
- [x] Build the client app.
- [ ] Implement tests for the app.
- [ ] Host the app in heroku/000webhost/netlify.
- [ ] Learn about docker and create a docker container for the same.
- [ ] Update the documentation/readme file.
