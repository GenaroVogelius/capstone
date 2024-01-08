
<a name="readme-top"></a>


[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="front-end-power/dist/assets/favicon-0c137303.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Power gym CS50W Final Project</h3>

  <p align="center">
    An awesome gym page which includes a user interface and a admin panel.
    <br />
    <strong></strong>
    <br />
    <a href="https://www.youtube.com/watch?v=dSgPigf97bU">View Demo</a>
        <br />
        <a href="https://power-gym.com.ar">URL of Gym Page</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li><a href="#Download-the-project">Download the project</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The aim of this app is to provide users and admins with a seamless and enjoyable experience throughout the entire platform. Below, you will find the key features and sections of the app

### Sobre nosotros (About Us):
* In this section, users get a visual tour of the gym through a carousel of images. I leverage the flexibility and versatility of Cloudinary for efficient image management. 
* After exploring the vibrant images, users can find detailed information about the gym's amenities and compelling reasons to choose the facility, all of this information is requested to the back-end and can be changed in the admin panel.

### Promos (Promotions):
* This section displays the current gym membership prices and promotions. The prices and promotions can be easily modified in the admin panel, allowing the owner to adjust fee prices and introduce special promotions effortlessly.

### Soy socio (I Am a Member)
* This section is dedicated to gym members. To access personalized features, users can log in using their National Document and a password created during the registration process. I have utilized JSON Web Tokens (JWT) for secure and efficient authentication.

* Once authenticated, members are greeted with a personalized dashboard that displays a warm welcoming message, and they can check the remaining days before their membership fee expires. Moreover, members can view their personalized routine, featuring a list of various exercises, each accompanied by an informative GIF demonstrating the correct form.
* Additionally, members can easily download their personalized routine in PDF format for convenient reference. Finally, there is a button to request a new fitness routine with a simple click


### Admin panel
Administrators can utilize the admin panel as a central hub to oversee and control various aspects of the gym's operations, ensuring smooth management of users, content, and services. Here are some tasks that an administrator can perform: 

* Manage Users: Create, modify, or delete user accounts.
Reset passwords and update user information.

* Content Management: Add, edit, or remove content, such as photos for the gym carousel.

* Attendance Tracking: View and manage gym attendance records for members.

* Fitness Routines: Create, modify, or delete fitness routines for members. Customize exercise details and associated forms.

* Membership Management: Handle membership-related tasks, such as updating payment information.
Manage different membership fee types and associated special promotions.

* Service Management: Add, edit, or remove various services offered by the gym.

Additionally, there is a special button within user profiles powered by pandas and chart.js, which generates statistics about member attendance, total member count, gender distribution, and more. This feature provides valuable insights for effective gym management.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project was built in with the following languajes, frameworks and libraries.
#### Backend:

* [![Python][Python.py]][Python-url]

* [![Django][Django.py]][Django-url]

* [![Django Rest Framework][Django_rest.py]][Django_rest-url]

* [![Django Contrab][Django_contrab.py]][Django_contrab-url]

* [![Django Cors Headers][Django_cors.py]][Django_cors-url]


* [![Cloudinary][Cloudinary.py]][Cloudinary-url]

* [![Pandas][Pandas.py]][Pandas-url]

* [![PostgreSQL][PostgreSQLdb]][PostgreSQL-url]

#### Frontend:

* [![JavaScript][JavaScript.js]][JavaScript-url]

* [![React][React.js]][React-url]
* [![JWT][JWT.js]][JWT-url]
* [![GreenSock][GreenSock.js]][GreenSock-url]

* [![Chart][Chart.js]][Chart-url]
* [![Styled Components][StyledComponents.js]][StyledComponents-url]
* [![React Router DOM][ReactRouterDOM.js]][ReactRouterDOM-url]
* [![Axios][Axios.js]][Axios-url]

* [![React Loading Skeleton][ReactLoadingSkeleton.js]][ReactLoadingSkeleton-url]

* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

#### CI/CD:

* [![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)


* [![Bash](https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white)](https://www.gnu.org/software/bash/)




<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Distinctiveness and Complexity
This proyect has his own distinctiveness and complexity because:
* Framework Utilization: 
I've employed advanced frameworks and libraries to enhance the performance and maintainability of the project. This not only results in cleaner code but also contributes to the creation of a dynamic and responsive website.

* Adherence to Best Practices: The project incorporates best practices learned during the course. This includes the implementation of thorough testing for views, utilizing GitHub Actions for Continuous Integration/Continuous Deployment (CI/CD), ensuring robust and reliable code deployment.

* Backend API Optimization: Harnessing the power of Django Rest Framework has remarkably streamlined the creation of a faster and more efficient backend API. This strategic choice not only ensures a cleaner implementation but also offers robust support for RESTful services. The decision to entrust the backend responsibilities to Django and Django Rest was driven by their formidable capabilities in seamlessly handling data manipulation and managing requests to the database through the robust Object-Relational Mapping (ORM) system. This approach has not only fortified the backend architecture but also paved the way for a smoother integration with the React frontend, resulting in a well-rounded and high-performance user interface.


* React Single Page Application: The use of React has allowed the creation of a seamless single-page application, offering users a fluid and engaging experience. Integration with JSON Web Tokens (JWT) ensures secure authentication both on the backend and frontend.

* GreenSock Library Integration: Incorporating the GreenSock library has empowered the website with captivating animations. These animations are strategically triggered based on user interactions, providing a visually appealing and interactive user interface.

* Bootstrap Integration: Utilizing Bootstrap has accelerated the frontend development process, allowing for the creation of faster and more responsive user interfaces.

* Pandas and Chart.js Integration: The combination of Pandas and Chart.js has been instrumental in manipulating and presenting data interactively. This dynamic duo facilitates effective data representation within the application.

* Styled Components and React Router DOM: Leveraging Styled Components and React Router DOM has facilitated the creation of clean and stylized components. Additionally, it enables easy tracking of user navigation within the page.

* Final Touches and Real-World Deployment: In addition to the course curriculum, I dedicated time to delve into real-life deployment strategies for my project, imparting practicality and genuine application. This journey involved acquiring proficiency in essential areas, including the mastery of bash commands, the intricacies of setting up a PostgreSQL database, and the nuances of managing web servers. This extended knowledge has empowered me to bring my project to life in a live environment, ensuring its seamless operation and real-world relevance.

* In conclusion, this project stands out as a unique creation by seamlessly blending various technologies into a sophisticated, high-performance, and visually appealing web application. The careful integration of these technologies reflects a commitment to extracting the best from each, resulting in the culmination of this serious final course project, which, humbly, I believe stands out at the level of this amazing course.

 





<!-- GETTING STARTED -->
## Download the project

The easiest way to run the project in your computer are running the following commands:

* 
  ```sh
  git clone https://github.com/GenaroVogelius/capstone
  ```

Now you will need to install all the dependencies, I suggest to start a virtual env first.

* 
  ```sh
  pip install -r requirements.txt
  python manage.py makemigrations
  python manage.py migrate
  ```

At this point you should have all the backend in properties, now open another terminal and run:



* 
  ```sh
  cd front-end-power
  npm install
  ```

  This was to install all the front-end dependencies.
  
*  Create a enviroment variables for a SECRET KEY, and if you pleased for cloudinary or just remove them from settings.py.


* Execute the following command in a terminal, ensuring that you are in the base directory of this project

  ```sh
  python manage.py runserver
  ```
  
* Run in another terminal with the path base directory/front-end-power

  ```sh
  npm run dev
  ```

That's all, you should have all the app running in your local machine.




<!-- CONTACT -->
## Contact

Genaro Vogelius - https://www.linkedin.com/in/genaro-vogelius-3a9332142/

<p align="right">(<a href="#readme-top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/genaro-vogelius-3a9332142/

[product-screenshot]: images/screenshot.png

[Python.py]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/

[Django.py]: https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white
[Django-url]: https://www.djangoproject.com/


[Django_rest.py]: https://img.shields.io/badge/Django_Rest_Framework-A30000?style=for-the-badge&logo=django&logoColor=white
[Django_rest-url]: https://www.django-rest-framework.org/

[Django_contrab.py]: https://img.shields.io/badge/Django_Crontab-44B78B?style=for-the-badge&logo=django&logoColor=white
[Django_contrab-url]: https://github.com/kraiz/django-crontab

[Django_cors.py]:https://img.shields.io/badge/Django_Cors_Headers-FF7000?style=for-the-badge&logo=django&logoColor=white
[Django_cors-url]:https://github.com/adamchainz/django-cors-headers

[Cloudinary.py]:https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white
[Cloudinary-url]:https://cloudinary.com/

[Pandas.py]:https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white
[Pandas-url]:https://pandas.pydata.org/

[PostgreSQLdb]: https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/


[JavaScript.js]:https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]:https://developer.mozilla.org/en-US/docs/Web/JavaScript

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/



[JWT.js]:https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white
[JWT-url]:https://jwt.io/

[GreenSock.js]:https://img.shields.io/badge/GreenSock-88CE02?style=for-the-badge&logo=greensock&logoColor=white
[GreenSock-url]:https://greensock.com/

[Chart.js]:https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white
[Chart-url]:https://www.chartjs.org/

[StyledComponents.js]:https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[StyledComponents-url]:https://styled-components.com/

[ReactRouterDOM.js]:https://img.shields.io/badge/React_Router_DOM-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouterDOM-url]:https://reactrouter.com/web/guides/quick-start


[ReactLoadingSkeleton.js]:https://img.shields.io/badge/React_Loading_Skeleton-00D68F?style=for-the-badge&logo=react&logoColor=white
[ReactLoadingSkeleton-url]:https://github.com/dvtng/react-loading-skeleton

[Axios.js]:https://img.shields.io/badge/Axios-56A7C4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]:https://axios-http.com/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
