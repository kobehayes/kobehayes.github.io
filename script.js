let navItems = [
    {
        text: 'Kobe Hayes', href: 'index.html',
        class: 'padded-right', id: 'nav-home', dropdown: [
            { text: 'hi', href: '#' },
        ]
    },
    {
        text: 'Graphic Design', href: 'graphic-design.html', dropdown: [
            { text: 'Can Anything Be Performance Art', href: 'graphic-design.html#perf-book' },
            { text: 'AUX Magazine', href: 'graphic-design.html#aux' },
            { text: 'Apollo 11', href: 'graphic-design.html#apollo' },
            { text: 'Activist Art of the AIDS Crisis', href: 'graphic-design.html#alt-poster' },
            { text: 'Animal Farm', href: 'graphic-design.html#animal-farm' },
            { text: 'This portfolio!', href: 'graphic-design.html#port-ss' },
        ]
    },


    {
        text: 'Photography', href: 'photography.html', dropdown: [
            { text: '35mm Photography', href: 'photography.html#bw-photos' },
            { text: 'Digital Photography', href: 'photography.html#digital-photos' },

        ]
    },
    {
        text: 'Time-Based', href: 'time-based.html', dropdown: [
            { text: 'Singularity Synth', href: 'time-based.html#kemper' },
            { text: 'Bounce Back from Burnout', href: 'time-based.html#bounce-back' },
            { text: 'How does sound work?', href: 'time-based.html#how-does-sound-work' },
            { text: 'Music\'s Elite Seat', href: 'time-based.html#elite-seat' },


        ]
    },
    {
        text: 'Music', href: 'music.html', dropdown: [
            { text: 'Synthesis', href: 'music.html#synthesis' },
            { text: 'Recordings', href: 'music.html#recordings' },

        ]
    },
    {
        text: 'Typeface', href: 'typeface.html', dropdown: [
            { text: 'Process', href: 'typeface.html#process' },
            // { text: 'Sketches', href: 'typeface.html#sketches' },

        ]
    },
    {
        text: 'More', href: 'about.html', dropdown: [
            { text: 'About Me', href: 'about.html#about' },
            { text: 'More of my work', href: 'about.html#more' },

        ]
    },

];


function generateNavBar() {
    let navBar = document.getElementById('navbar');

    for (let item of navItems) {
        let a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;

        let div = document.createElement('div');
        div.className = 'dropdown';

        if (item.dropdown) { // Check if the dropdown property exists
            for (let dropdownItem of item.dropdown) {
                // Access properties of the dropdown item
                let dropdownA = document.createElement('a');
                dropdownA.textContent = dropdownItem.text;
                dropdownA.href = dropdownItem.href;
                div.appendChild(dropdownA);
            }
        }

        let navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.appendChild(a);
        navItem.appendChild(div);
        navBar.appendChild(navItem);
    }

    //---------resize images dynamically
    window.addEventListener('resize', () => {
        let img = document.querySelector('img');
        img.width = window.innerWidth / 1.5; // half of the window's width
        //   img.height = img.width * (img.naturalHeight / img.naturalWidth); // maintain aspect ratio
    });
}


function generateFooter(name, contactInfo) {
    // Create a new footer element
    let footer = document.createElement('footer');

    // Set the inner HTML of the footer
    footer.innerHTML = `
        <div class="footer-content">

            <p>kobehayes1@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/kobehayes/">LinkedIn</a></p>

<p><a href="https://www.instagram.com/k.be?igsh=MXRud2prZTJ0a3FldQ%3D%3D&utm_source=qr">Instagram</a></p>   
        </div>
    `;

    document.body.appendChild(footer);
}

generateFooter();


// document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.getElementById('hamburger');
//     const menuItems = document.querySelector('.menu-items');

//     hamburger.addEventListener('click', function () {
//         menuItems.classList.toggle('active');
//     });
// });

// apollo embed
document.addEventListener('DOMContentLoaded', () => {
    const embedButton = document.getElementById('apollo-embed-button');
    const closeButton = document.getElementById('apollo-x-button');
    const overlay = document.getElementById('apollo-embed-div');

    if (embedButton && overlay) {
        embedButton.addEventListener('click', function () {
            overlay.style.display = 'flex';
        });
    }

    if (closeButton && overlay) {
        closeButton.addEventListener('click', function () {
            overlay.style.display = 'none';
        });
    }
});
