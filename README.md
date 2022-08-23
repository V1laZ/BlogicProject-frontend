# BlogicProject-frontend
Frontend for **BlogicProject** done with **Angular** framework.  
Backend can be found [here](https://github.com/V1laZ/BlogicProject-backend)

## Table of contents
- [BlogicProject-frontend](#blogicproject-frontend)
  - [Prerequisites](#prerequisites)
  - [Development server](#development-server)
- [Usage](#usage)
  - [Main page](#main-page)
  - [Smlouvy page](#smlouvy-page)
  - [Poradci page](#poradci-page)
  - [Klienti page](#klienti-page)
  - [Login page](#login-page)

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Usage
## Main page
![](https://i.imgur.com/c41m9uk.png)
1. **Main page** of the application you are currently on 
2. This will show you the table with **Smlouvy**
3. This will show you the table with **Poradci**
4. This will show you the table with **Klienti**
5. **Login** form where you can login with your credentials
6. **Logout** button. You will lose access to all tables

## Smlouvy page
**You need to be logged in to view this page.**

![](https://imgur.com/z6oEAdg.png)

Here you can see all the details of **Smlouvy**. **Stáhnout csv** button exports this table into .csv file. If you click on **Klient's ID** or **Spravce's ID** it will show you the details of that corresponding **Klient/Spravce** as you can see on the image below.

![](https://imgur.com/sZJXBkZ.png)

## Poradci page
**You need to be logged in to view this page.**

![](https://imgur.com/H3wOkAg.png)

Here you can see all the details of **Poradci**. **Stáhnout csv** button exports this table into .csv file.

## Klienti page
**You need to be logged in to view this page.**

![](https://imgur.com/qzKSptC.png)

Here you can see all the details of **Klienti**. **Stáhnout csv** button exports this table into .csv file.

## Login page

![](https://imgur.com/ybLuFm3.png)

You can login from here by writing your **Username** and **Password** into the form and clicking the **Login** button. If you typed something wrong it will show you an error above the Login button.  
Development admin credentils are:
- **Username**: vilaz
- **Password**: 316Tnl40&r3r
