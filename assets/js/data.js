const currentDate = new Date()
const data = {
    age: '24',
    gender: 'male',
    about: [
        `Hi! My name is Roman, and I’m a PHP developer with a strong focus on WordPress.<br>
I have 2 years of commercial experience working with WordPress — building, optimizing, and enhancing websites of any complexity.<br>
<br>
In addition to backend development, I have frontend skills — creating responsive interfaces, integrating animations, and improving user experience (UX).`,

    ],
    phone: [
        '+37069758932',
    ],
    skills: [
        {
            name: 'HTML',
            experience: 2,
        },
        {
            name: 'CSS',
            experience: 2,
        },
        {
            name: 'javaScript',
            experience: 2,
        },
        {
            name: 'SASS/LESS/SCSS',
            experience: 2,
        },
        {
            name: 'Photoshop (Ps)',
            experience: 7,
        },
        {
            name: 'Figma',
            experience: 2,
        },
        {
            name: 'Git',
            experience: 2,
        },
        {
            name: 'Wordpress',
            experience: 2,
        },
        {
            name: 'Bootstrap 4/5',
            experience: 1,
        },
        {
            name: 'PHP',
            experience: 2,
        },
        {
            name: 'ACF',
            experience: 2,
        },
        {
            name: 'WPML',
            experience: 1,
        },
        {
            name: 'WooCommerce',
            experience: 1,
        },
        {
            name: 'MySQL',
            experience: 2,
        },
        {
            name: 'Elementor',
            experience: 1,
        },
        {
            name: 'JSON',
            experience: 2,
        },
    ],
    socials: [
        {
            iconClass: 'fab fa-linkedin',
            href: 'https://www.linkedin.com/in/raman-alsheuski-37a091373/',
        },
    ],
    position: [
        'PHP developer',
        'WordPress developer'
    ],
    education: {
        basic: [
            {
                name: `Belarusian National Technical University`,
                specialization: `Information systems and technology software`,
                qualification: `Programm engineer`,
                period: ['2019', '2024']
            },
            
        ],
        additional: [
            {
                name: `Solo learn courses`,
                period: ['2023', '2024'],
                certification: 'Solo learn',
            },

        ],
    },
    languages: [
        {
            name: 'English',
            level: 'B1',
        },
        {
            name: 'Russian',
            level: 'С2',
        },
        {
            name: 'Lithuanian',
            level: 'A1',
        }
    ],
    interests: [
        'Developer trends',
        'Programming',
        '3Dmodeling and printing',
        'Electronics',
        'Football',
        'Voleyball',
    ],
    messengers: [
        {
            href: 'https://t.me/Asi_Koju',
            iconClass: 'fab fa-telegram',
        },
        {
            href: `https://www.linkedin.com/in/raman-alsheuski-37a091373/`,
            iconClass: 'fab fa-linkedin',
        },
    ],
    experience: [
        {
            period: ['08.2024', '10.2025'],
            workNow: true,
            companyName: `OutSoft`,
            position: `PHP developer`,
            description: `
            <i>Wordpress</i> <br>
            - Development of landing pages, online stores, and multi-page websites.<br>
        - Bug fixing and troubleshooting.<br>
        - WordPress development and customization.<br>
        - WooCommerce development and customization.<br>
        - Working with custom WordPress themes.<br>
        - Creating themes from scratch.<br>
        - Working with plugins like ACF, Contact Form 7, Polylang, Elementor,WPML.<br>
        - Creating animations using JS.<br>
        - Working with various WordPress plugins and creating custom solutions for WooCommerce.<br>
        <i>Laravel</i> <br>
        - Development and maintenance of web applications using the Laravel framework.<br>
        - Database design and management using MySQL.<br>
        - Create migrations, seeders, and Eloquent models to interact with the database.<br>
        - Using Blade templating engine to create dynamic and responsive user interfaces.<br>
        - Using MVC architecture to separate application logic from presentation layer.<br>
        `,

        },

        {
            period: ['02.2023', '08.2024'],
            workNow: false,
            companyName: `Remote Helpers`,
            position: `PHP developer`,
            description: `
            <i>Wordpress</i> <br>
            - Development of landing pages, online stores, and multi-page websites.<br>
        - Bug fixing and troubleshooting.<br>
        - WordPress development and customization.<br>
        - WooCommerce development and customization.<br>
        - Working with custom WordPress themes.<br>
        - Creating themes from scratch.<br>
        - Working with plugins like ACF, Contact Form 7, Polylang, Elementor,WPML.<br>
        - Creating animations using JS.<br>
        - Working with various WordPress plugins and creating custom solutions for WooCommerce.<br>
                <i>Laravel</i> <br>
        - Development and maintenance of web applications using the Laravel framework.<br>
        - Database design and management using MySQL.<br>
        - Create migrations, seeders, and Eloquent models to interact with the database.<br>
        - Using Blade templating engine to create dynamic and responsive user interfaces.<br>
        - Using MVC architecture to separate application logic from presentation layer.<br>
        `,
        },
        {
            period: ['09.2022', '02.2023'],
            workNow: false,
            companyName: `Onix Systems`,
            position: `PHP developer`,
            description: `
            <i>Wordpress</i> <br>
        - Development of landing pages, online stores, and multi-page websites.<br>
        - Bug fixing and troubleshooting.<br>
        - WordPress development and customization.<br>
        - WooCommerce development and customization.<br>
        - Working with custom WordPress themes.<br>
        - Creating themes from scratch.<br>
        - Working with plugins like ACF, Contact Form 7, Polylang, Elementor,WPML.<br>
        - Creating animations using JS.<br>
        - Enhancement of plugin functionality.<br>
        - Working with various WordPress plugins and creating custom solutions for WooCommerce.<br>`,
        },
        {
            period: ['04.2022', '08.2022'],
            workNow: false,
            companyName: `DevOut Labs`,
            position: `PHP developer`,
            description: `
            <i>Wordpress</i> <br>
            -Development of a WordPress website, deploying it on a CMS using ACF Pro, Contact Form 7, and incorporating JS animations.<br>
        Ability to edit text fields and replace images.<br>
        Customizable menu that can be modified in the admin panel.<br>`,
        },
        {
            period: ['01.2022', '04.2022'],
            workNow: false,
            companyName: `Lion Internal`,
            position: `PHP developer`,
            description: `
            <i>Wordpress</i> <br>
            - Bug tracking and resolution on webpages.<br>
        - Configuration of the store's payment systems.<br>
        - Implementation of new logic on websites.<br>
        - Development of new webpages.<br>
        - Proficiency in WooCommerce.<br>
        - Expertise in WordPress and its plugins, including ACF and Contact Form 7.<br>`,
        },
        {
            period: ['2021', '2022'],
            workNow: false,
            companyName: `Freelance on UpWork`,
            position: `Front-end | PHP developer`,
            description: `- Development of landing pages, online stores, and multi-page websites.<br>
        - Bug fixing and troubleshooting.<br>
        - WordPress development and customization.<br>
        - WooCommerce development and customization.<br>
        - Working with custom WordPress themes.<br>
        - Creating themes from scratch.<br>
        - Working with plugins like ACF, Contact Form 7, Polylang, Elementor,WPML.<br>
        - Creating animations using JS.<br>
        - Working with various WordPress plugins and creating custom solutions for WooCommerce.<br>`,
        },
    ],
    work: [
        
    ],




    makeMyStory() {
        return this.about ? ` <p>${this.about.map(item => `${item} `).join(' ')}</p>` : '';
    },
    makeContacts() {
        return this.messengers.map
            (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeSocialLinks() {
        return this.socials.map
            (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeLanguages() {
        return this.languages.map
            (item => `<span class="lang-item anim-item"><span>${item.name}<s>${item.level}</s></span></span>`).join('');
    },
    makeSkills() {
        return this.skills.map
            (item => `<span class="skill-item anim-item"><span>${item.name}<s>${item.experience.toString()}</s></span></span>`).join('');
    },
    makeInterests() {
        return this.interests.map
            (item => `<span class="hobby-item anim-item"><span>${item}</span></span>`).join('');
    },
    makeWorkExperience() {
        let experienceItems = '';
        let sortedItems = this.experience.sort(function (a, b) {
            if (a.period[1] < b.period[1]) {
                return 1;
            }
            if (a.period[1] > b.period[1]) {
                return -1;
            }
        });
        sortedItems.forEach(item => {
            experienceItems += `<h4>${item.companyName} <span>${item.period[0]} - ${item.workNow === true ? 'now' : item.period[1]}</span></h4>
                                <h5>${item.position}</h5>
                                <p>${item.description}</p>`
        })
        return experienceItems;

    },
    makeEducation() {
        let eduRow = `<h3>Basic</h3>`;
        let sortedItems = this.education.basic.sort(function (a, b) {
            if (a.period[1] < b.period[1]) {
                return 1;
            }
            if (a.period[1] > b.period[1]) {
                return -1;
            }
        });
        sortedItems.forEach(item => {
            eduRow +=
                `<div class="eduItem">
                    <h4>${item.name}<span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.qualification}</h5>
                </div>`
        })

        let additional = `${this.education.additional
            ? `<h3>Additional</h3> ${this.education.additional.map(item =>
                `<div class="eduItem">
                    <h4>${item.name} <span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.certification}</h5>
                </div>`).join('')}`
            : ``
            }`
        eduRow += additional;
        return eduRow;
    },

    makeWork() {

        let myWork = document.querySelector('.myWork');

        myWork.innerHTML = this.work.map(function (item) {
            return `<a href="${item.linkWork}">
                        <div class="single_work_block">
                        <h3>${item.nameWork}</h3>
                        <img src="${item.imageWork}">
                        </div>
                    </a>`;
        }).join('');
    },
}


