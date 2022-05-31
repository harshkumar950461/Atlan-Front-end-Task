

[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


# :computer: Atlan Frontend Task: Mastering SQL Queries
<strong> Link to the application: https://atlan-front-end-task.netlify.app/</strong>
<br>

## Introduction

The given application is developed as a task for Atlan. It enables users to run SQL queries in an online editor, and analyze the output obtained as a result of running the queries.

The detailed Problem Statement is also mentioned towards the end of this document.

## Data 
The data used in the application is obtained from https://www.mockaroo.com/, a website that can easily generate mock data. 

The data is downloaded and stored as a local JSON object but CSV files can also be used for the same by using a different logic, or a pre exisiting format conversion library.

## Page Speed and Optimisation

For all the page optimisation analysis, I have used Google's Lighthouse tool and Page Speed Insights to analysze the page load time, along with how well it performs as per web standards. I have also used GTMetrix to cross-check the same. On a laptop browser, the time to be interactive is <strong>0.5 seconds</strong> for the Homepage, as well as the SQL Editor page.

### 1. Page Load Time

I have taken the page load time used here to be the time taken for the site to be interactive, which in all the cases shown below, falls well under Google's time specified for mobile and desktop devices. It is the most important metric from the user's standpoint in my opinion as it allows the users to start navigating the site.

The Detailed Screenshots have been attached along with respective page load times in a later section of the document.

### 2. Optimizing the Page Load Time and other metrics

1. I have made the application into a <strong>PWA(Progressive Web App)</strong> so that it can be optimized as Google is promoting the use of such Installable apps. This also allows the web app to be used offline as it <strong>can be installed</strong>.

2. The website is made responsive to a great extent even though such an application is not very likely to be used on mobile devices. <strong>Absolute sizing is not used</strong> as much as possible and in turn, sizing units like <strong>em, rem, vh, and vw</strong> are used. <strong>Media queries</strong> have been used at most places, except a few where Bootstrap had to be used for rapid development.

3. The website is hosted on Vercel, which is considered to be one of the fastest free hosting mechanisms for JavaScript based Web apps due to it's CDN and caching benefits. It also provides a free SSL during hosting that is generally better for page security, and ranking.

4. React lazy loading has been used for loading parts of the page not immediately required in the background.

5. Minimal dependencies have been used for the creation of the page.

6. Restructured code to reuse components & used minimal imports where necessary.

## Screenshots

### Functionality
<img width="720" src="https://user-images.githubusercontent.com/61644460/171229873-2beb6ce1-0cd0-4cd3-8cc2-8e7e3ff35a07.png">
<img width="720" src="https://user-images.githubusercontent.com/61644460/171230601-e8e4d5db-796f-4356-8204-8a9ba84d0ff3.png">
<img width="720" src="https://user-images.githubusercontent.com/61644460/171230856-67cf25b1-4c8c-4da0-9eb3-43180ed4d077.png">
<img width="720" alt="https://user-images.githubusercontent.com/61644460/171231220-a594c680-02ee-48a2-9ae0-be6a47d8d1d5.png">




### Page Load Times (Google Lighthouse used, in Incognito Browser Mode in Brave V1.28.106 based on Chromium V92

<strong>Homepage Load Time (Desktop) : 0.5 seconds</strong>
  
(![image](https://user-images.githubusercontent.com/61644460/171233310-82035661-64e7-4e1e-ab11-1a3fa424a743.png))

<strong>Performance Summary</strong>

(![image](https://user-images.githubusercontent.com/61644460/171235208-31af4212-234f-4aad-8c35-6f6f42d9cc69.png))

    
<strong>Homepage Load Time (Mobile) : 1.9 seconds</strong>
(![image](https://user-images.githubusercontent.com/61644460/171236498-99f74663-61cc-4b55-9052-55f618503b0a.png))


## Problem Statement

### SQL Editor
Create a SQL editor view where your users can query easily on a table using SQL, and see the results. Think of all the features, style, design, layout that you think would be needed to make the query experience beautiful, smooth & efficient. Create your web app accordingly.

<strong>Ideal User:</strong> Our target users here are the data analysts of any organization, who will actually use the interface, query the data and pass on the results to their business team.

<strong>*Note:</strong> Do not worry about the backend of the app. Just focus on the frontend. Use stubs & mocks wherever you think the backend is necessary.

<strong>*Note2:</strong> Do not write SQL logic to show data results. Have a few predefined SQL queries and show their results directly.

<strong>Sample csv data you can use:</strong> https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv

<strong>Things to note:</strong>
1. Use a JavaScript framework for the task, preferably Vue.js/Nuxt.js but any framework would work. <strong>DO NOT code</strong> in vanilla JS.
2. You are <strong>NOT</strong> restricted to use this particular data. You can use any external data as well, if you want.
3. Calculate the page load time of your app. Write the page load time in README. Also write, how did you calculate the page load time of the app.
4. If you made any changes to optimize the page load time of your app, write all the steps you took to optimize the page load time in README.

<strong>Submission details:</strong>
1. Host the code in a version control system eg. Github, Gitlab etc, and send us the link to the repository.
2. Also, host the web app online using services like Netlify, Surge etc and send us its link. (DO NOT EXPECT the person checking the task to install your web app locally. There can be a lot of issues and back & forth, in case of any issue during local installation. It’s better you host the app and send us the link)

<strong>You will be judged on the following: </strong>
1. Code structure and readability.
2. Page layout and feature set
3. Information hierarchy of all the content and components shown on the page(s) of your app.
4. Page load time of your app.

<strong><em>Good luck!</em></strong>

