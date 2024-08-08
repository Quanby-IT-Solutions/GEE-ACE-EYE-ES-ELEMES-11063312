apple
### Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/474efb993b6ccd96db81e840dc48a80ccc303d45.svg "Repobeats analytics image")

<p align="center">
    <img src="src/assets/preview/logo.png" width="150">
</p>

<p align="center">
    <a href="https://github.com/Quanby-IT-Solutions/quanby-lms/stargazers">
        <img height="24" src="https://img.shields.io/github/stars/Quanby-IT-Solutions/quanby-lms?colorA=1e1e28&colorB=c9cbff&style=for-the-badge">
    </a>
    <a href="https://github.com/Quanby-IT-Solutions/quanby-lms/issues">
        <img height="24" src="https://img.shields.io/github/issues/Quanby-IT-Solutions/quanby-lms?colorA=1e1e28&colorB=f7be95&style=for-the-badge">
    </a>
    <a href="https://github.com/Quanby-IT-Solutions/quanby-lms/contributors">
        <img height="24" src="https://img.shields.io/github/contributors/Quanby-IT-Solutions/quanby-lms?colorA=1e1e28&colorB=b1e1a6&style=for-the-badge">
    </a>
</p>

<p>
    <img alt="Preview" src="src/assets/preview/preview.gif">
</p>

#### Versions

<a href="https://angular.io">
    <img height="24" src="https://img.shields.io/badge/Angular 17-DD0031?style=for-the-badge&logo=angular&logoColor=white">
</a>
<a href="https://tailwindcss.com">
    <img height="24" src="https://img.shields.io/badge/Tailwind 3-0ea5e9?style=for-the-badge&logo=tailwind-css&logoColor=white">
</a>

#### Features

- [x] Sidebar
- [x] Dark Theme
- [x] Navbar
- [x] Footer
- [x] Auth Module
- [x] Dashboard Module
- [x] Standalone components
- [x] Angular Signals
- [x] Multi Theme
- [x] Tests E2E
- [ ] User Module
- [ ] Guards
- [ ] Animations

#### Commands

| Command                   | What it does?                                 |
| ------------------------- | :-------------------------------------------- |
| `npm start`               | Starts the server in dev mode                 |
| `npm run lint`            | Runs ESLint on project                        |
| `npm run prettier`        | Runs prettier on entire src folder            |
| `npm run prettier:verify` | Runs prettier-check and throws error if fails |
| `npm run prettier:staged` | Runs prettier on only staged (changed) files  |
| `npm run e2e-ui`          | Runs playwright e2e test with UI              |

#### Dependencies

| Package            | What it does?                                                                               | Link                                                   |
| ------------------ | :------------------------------------------------------------------------------------------ | :----------------------------------------------------- |
| `angular-svg-icon` | Provides a means to inline SVG files to allow for them to be easily styled by CSS and code. | [Here](https://www.npmjs.com/package/angular-svg-icon) |
| `apexcharts`       | Modern & Interactive Open-source Charts                                                     | [Here](https://www.npmjs.com/package/apexcharts)       |
| `ng-apexcharts`    | Angular wrapper for ApexCharts to build interactive visualizations in Angular.              | [Here](https://www.npmjs.com/package/ng-apexcharts)    |

#### Dev Dependencies

| Package                       | What it does?                                                                                            | Link                                                              |
| ----------------------------- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| `prettier`                    | An opinionated code formatter                                                                            | [Here](https://www.npmjs.com/package/prettier)                    |
| `prettier-plugin-tailwindcss` | A Prettier plugin for Tailwind CSS that automatically sorts classes based on our recommended class order | [Here](https://www.npmjs.com/package/prettier-plugin-tailwindcss) |
| `tailwind-scrollbar`          | Tailwind plugin for styling scrollbars.                                                                  | [Here](https://www.npmjs.com/package/tailwind-scrollbar)          |
| `tailwindcss`                 | A utility-first CSS framework for rapidly building custom user interfaces.                               | [Here](https://www.npmjs.com/package/tailwindcss)                 |

#### Icons and Patterns

This project uses [Hero Icons](https://heroicons.com/), [Hero Patterns](https://heropatterns.com/), and [Popsys illustrations](https://popsy.co/).

#### Disclaimer

The Tailwind name and logos are trademarks of Tailwind Labs Inc.
The Angular name and logos are trademarks of Google.

#### Create Component

sample

    ng generate directive|pipe|service|class|guard|interface|enum|module

    if you want to create a modules this is the command: ng generate component {folder}/{module name}

    ```bash
        ng generate component modules/home
    ```

    reference: https://vercel.com/templates/angular/angular-boilerplate

### Changelog for now

[deployment of app to firebase](https://www.npmjs.com/package/@angular/fire)

[Vercel Deployment Demo](https://quanby-lms.vercel.app/)

## Docker Command

    After settings up the dockerfile

    ```bash
        docker build . -t quanby_lms
        docker images
        docker run -p 8080:80 quanby_lms
    ```

TODOS
    - Dummy Data
    - Signing of Guests (Teacher/Student)
    - Integration of the auth (signing and updating profile)
