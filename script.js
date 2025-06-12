let navItems = [
    {
        text: 'Kobe Hayes', href: 'index.html',
        class: 'padded-right', id: 'nav-home', dropdown: [
            { text: 'hello!', href: '#' },
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
            { text: '35mm Photography', href: 'photography.html' },
            { text: 'Digital Photography', href: 'photography.html#digital-photos' },

        ]
    },
    {
        text: 'Video', href: 'video.html', dropdown: [
            { text: 'Singularity Synth', href: 'video.html' },
            { text: 'Bounce Back from Burnout', href: 'video.html#bounce-back' },
            { text: 'How does sound work?', href: 'video.html#how-does-sound-work' },
            { text: 'Music\'s Elite Seat', href: 'video.html#elite-seat' },


        ]
    },
    {
        text: 'Audio', href: 'audio.html', dropdown: [
            { text: 'Synthesis', href: 'audio.html' },
            { text: 'Recordings', href: 'audio.html#recordings' },

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
            { text: 'About me', href: 'about.html#about' },
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


function mobileMenuToggle() {

    const menuButton = document.getElementById("mobile-navbar-button");
    const mobileMenu = document.getElementById("navbar");
    const mobileDropdown = document.getElementsByClassName("dropdown");


    // while (innerWidth <= 767) {
    //     document.getElementById("navbar").style.visibility = "hidden";
    // }
    // while (innerWidth > 767) {
    //     document.getElementById("navbar").style.visibility = "visible";
    // }


    for (var x = 0; x < document.getElementsByClassName("dropdown").length; x++) {
        document.getElementsByClassName("dropdown")[x].style.visibility = "hidden";
    }

    // if navbar is hidden, menu button click makes dropdown elements and navbar visible , if navbar is not hidden, menu button click makes dropdown elements and navbar hidden
    menuButton.addEventListener("click", () => {

        if (document.getElementById("navbar").style.visibility == "hidden") {

            document.getElementById("navbar").style.visibility = "visible";
            // dropdown must be a list because you cant set visibility for an entire class, must iterate
            for (var x = 0; x < document.getElementsByClassName("dropdown").length; x++) {
                document.getElementsByClassName("dropdown")[x].style.visibility = "visible";
            }

        }
        else {
            document.getElementById("navbar").style.visibility = "hidden";
            for (var x = 0; x < document.getElementsByClassName("dropdown").length; x++) {
                document.getElementsByClassName("dropdown")[x].style.visibility = "hidden";
            }
        }

    }
    )
    // trying to toggle menu when clicking dropdown elements
    // mobileDropdown.addEventListener("click", document.getElementById("navbar").style.visibility = "hidden");

}


mobileMenuToggle();


