window.onload = function () {
    // Check if username exists in sessionStorage
    const username = sessionStorage.getItem("username");

    if (username) {
        console.log("Username found in session storage:", username);
        document.getElementById("sign-up").style.display = "none";
        document.getElementById("sign-out").style.display = "block";
        document.getElementById("loggedInUserName").innerHTML = username;
        // Optionally, you can redirect or update the page content based on the presence of username
    } else {
        console.log("No username found in session storage");
        document.getElementById("sign-up").style.display = "block";
        document.getElementById("sign-out").style.display = "none";
        // Optionally, redirect to login page or show an alert
    }
};
function signOut() {
    sessionStorage.removeItem("username");
    window.location.href = "/auth.html";
}



let profile = document.querySelector('.profile');

profile.onclick = function () {
    profile.classList.toggle('active');
};

// Courses Data
const courses = [
    {
        courseCode: "COM101",
        title: "Introduction to Business",
        category: "Commerce",
        subCategory: "Business Fundamentals",
        price: 300,
        popularity: 85,
        description: "Learn the fundamentals of business, including management and entrepreneurship.",
        imageUrl: "IMAGES/course1.jpg",
        
        objectives: [
            "Understand business operations",
            "Learn management principles",
            "Explore entrepreneurship concepts"
        ],
        curriculum: [
            { title: "Business Operations", description: "An overview of how businesses function." },
            { title: "Management Principles", description: "Learn essential management strategies." }
        ],
        instructor: {
            name: "John Doe",
            bio: "Business expert with 12 years of industry experience.",
            imageUrl: "IMAGES/instructor1.jpg"
        },
        reviews: [
            { author: "James Carter", date: "September 12, 2024", text: "Very insightful and practical." }
        ],
        price: 199,
        duration: "4 weeks"
    },
    {
        courseCode: "COM102",
        title: "Financial Accounting",
        category: "Commerce",
        subCategory: "Accounting",
        price: 350,
        popularity: 90,
        description: "Master the principles of accounting and financial reporting.",
        imageUrl: "IMAGES/course2.jpg",
        
        objectives: [
            "Understand accounting principles",
            "Learn financial statement analysis",
            "Gain insights into corporate finance"
        ],
        curriculum: [
            { title: "Accounting Principles", description: "Basic principles of accounting and bookkeeping." },
            { title: "Financial Reporting", description: "Understanding financial statements and reporting." }
        ],
        instructor: {
            name: "Sarah Lee",
            bio: "CPA with over 15 years of accounting experience.",
            imageUrl: "IMAGES/instructor2.jpg"
        },
        reviews: [
            { author: "Emily Ross", date: "October 5, 2024", text: "The accounting principles were well-explained." }
        ],
        price: 250,
        duration: "5 weeks"
    },
    {
        courseCode: "MATH201",
        title: "Advanced Calculus",
        category: "Mathematics",
        subCategory: "Calculus",
        price: 280,
        popularity: 85,
        description: "Deep dive into advanced calculus techniques and applications.",
        imageUrl: "IMAGES/course3.jpg",
        
        objectives: [
            "Master advanced calculus concepts",
            "Apply calculus to real-world problems"
        ],
        curriculum: [
            { title: "Differential Calculus", description: "Advanced techniques in differentiation." },
            { title: "Integral Calculus", description: "In-depth integration techniques and applications." }
        ],
        instructor: {
            name: "Jane Doe",
            bio: "Mathematics professor with a PhD in applied math.",
            imageUrl: "IMAGES/instructor3.jpg"
        },
        reviews: [
            { author: "Mark Liu", date: "September 29, 2024", text: "The advanced calculus was challenging but rewarding." }
        ],
        price: 250,
        duration: "6 weeks"
    },
    {
        courseCode: "TECH301",
        title: "Data Structures and Algorithms",
        category: "Technology",
        subCategory: "Programming",
        price: 450,
        popularity: 95,
        description: "Learn essential data structures and algorithms for efficient programming.",
        imageUrl: "IMAGES/course4.jpg",
        
        objectives: [
            "Understand key data structures",
            "Learn algorithm design and analysis",
            "Implement efficient code"
        ],
        curriculum: [
            { title: "Arrays and Linked Lists", description: "Introduction to basic data structures." },
            { title: "Sorting Algorithms", description: "Learn various sorting techniques and their efficiencies." },
            { title: "Graph Algorithms", description: "Explore graph traversal and shortest path algorithms." }
        ],
        instructor: {
            name: "David Miller",
            bio: "Software engineer with a passion for teaching.",
            imageUrl: "IMAGES/instructor4.jpg"
        },
        reviews: [
            { author: "Alice Kim", date: "August 18, 2024", text: "Great course for understanding algorithms." }
        ],
        price: 350,
        duration: "7 weeks"
    },
    {
        courseCode: "TECH302",
        title: "Artificial Intelligence",
        category: "Technology",
        subCategory: "Artificial Intelligence",
        price: 500,
        popularity: 98,
        description: "Explore the fundamentals of AI and machine learning.",
        imageUrl: "IMAGES/course5.jpg",
        
        objectives: [
            "Understand AI principles",
            "Learn machine learning algorithms",
            "Develop AI applications"
        ],
        curriculum: [
            { title: "Introduction to AI", description: "Overview of AI and its applications." },
            { title: "Machine Learning Basics", description: "Supervised and unsupervised learning techniques." },
            { title: "Neural Networks", description: "Learn how neural networks work." }
        ],
        instructor: {
            name: "John Smith",
            bio: "AI expert with 10 years of experience in the field.",
            imageUrl: "IMAGES/instructor5.jpg"
        },
        reviews: [
            { author: "Kate Wilson", date: "October 8, 2024", text: "An excellent course to start with AI." }
        ],
        price: 400,
        duration: "8 weeks"
    },
    {
        courseCode: "TECH303",
        title: "Web Development Bootcamp",
        category: "Technology",
        subCategory: "Web Development",
        price: 400,
        popularity: 92,
        description: "Become a full-stack web developer by learning HTML, CSS, JavaScript, and more.",
        imageUrl: "IMAGES/course7.jpg",
        
        objectives: [
            "Build responsive websites",
            "Master front-end and back-end development",
            "Learn popular frameworks like React and Node.js"
        ],
        curriculum: [
            { title: "HTML & CSS Basics", description: "Learn to structure and style websites." },
            { title: "JavaScript Fundamentals", description: "Master the basics of JavaScript programming." },
            { title: "React and Node.js", description: "Introduction to modern frameworks for web development." }
        ],
        instructor: {
            name: "Michael Scott",
            bio: "Full-stack developer with 7 years of experience.",
            imageUrl: "IMAGES/instructor7.jpg"
        },
        reviews: [
            { author: "Oliver White", date: "August 10, 2024", text: "A perfect start to web development." }
        ],
        price: 350,
        duration: "10 weeks"
    },
    {
        courseCode: "ART101",
        title: "Graphic Design Fundamentals",
        category: "Design",
        subCategory: "Graphic Design",
        price: 250,
        popularity: 80,
        description: "Learn the core principles of graphic design and start creating stunning visuals.",
        imageUrl: "IMAGES/course8.jpg",
        
        objectives: [
            "Understand design theory",
            "Master typography and color theory",
            "Learn how to use design software"
        ],
        curriculum: [
            { title: "Introduction to Design", description: "Learn the foundations of visual design." },
            { title: "Typography and Layout", description: "Explore the use of fonts and effective layouts." }
        ],
        instructor: {
            name: "Emily Green",
            bio: "Graphic designer with over 10 years of professional experience.",
            imageUrl: "IMAGES/instructor8.jpg"
        },
        reviews: [
            { author: "Sophia Lee", date: "September 22, 2024", text: "Great introduction to design principles." }
        ],
        price: 200,
        duration: "6 weeks"
    },
    {
        courseCode: "SCI401",
        title: "Introduction to Astrophysics",
        category: "Science",
        subCategory: "Physics",
        price: 350,
        popularity: 88,
        description: "Explore the mysteries of the universe with this beginner's guide to astrophysics.",
        imageUrl: "IMAGES/course9.jpg",
        
        objectives: [
            "Understand the fundamentals of astrophysics",
            "Learn about stars, galaxies, and the cosmos",
            "Study the big bang and black holes"
        ],
        curriculum: [
            { title: "Basics of Astronomy", description: "An overview of stars, galaxies, and planetary systems." },
            { title: "Black Holes and the Universe", description: "Learn about black holes and cosmic phenomena." }
        ],
        instructor: {
            name: "Dr. Robert Wilson",
            bio: "Astrophysicist with research in black holes and cosmology.",
            imageUrl: "IMAGES/instructor9.jpg"
        },
        reviews: [
            { author: "Benjamin Carter", date: "October 5, 2024", text: "Fascinating course with a lot of depth." }
        ],
        price: 300,
        duration: "8 weeks"
    },
    {
        courseCode: "HIST201",
        title: "World History: From Ancient to Modern",
        category: "Humanities",
        subCategory: "History",
        price: 280,
        popularity: 82,
        description: "Explore the major events and civilizations that shaped the world from ancient times to the modern era.",
        imageUrl: "IMAGES/course10.jpg",
        
        objectives: [
            "Understand key historical events",
            "Learn about ancient and modern civilizations",
            "Study the impacts of wars and revolutions"
        ],
        curriculum: [
            { title: "Ancient Civilizations", description: "Learn about the rise of ancient civilizations like Egypt, Greece, and Rome." },
            { title: "World Wars", description: "Study the causes and effects of the major world wars." }
        ],
        instructor: {
            name: "Dr. Samantha Parker",
            bio: "Historian specializing in world history and global conflicts.",
            imageUrl: "IMAGES/instructor10.jpg"
        },
        reviews: [
            { author: "Charlotte Harris", date: "July 28, 2024", text: "A well-structured course with a lot of detail." }
        ],
        price: 240,
        duration: "7 weeks"
    },
    {
        courseCode: "MUS101",
        title: "Music Theory for Beginners",
        category: "Music",
        subCategory: "Theory",
        price: 200,
        popularity: 75,
        description: "Learn the fundamentals of music theory and start reading and composing music.",
        imageUrl: "IMAGES/course11.jpg",
        
        objectives: [
            "Understand the basics of music theory",
            "Learn to read musical notation",
            "Compose simple melodies"
        ],
        curriculum: [
            { title: "Introduction to Music Theory", description: "Overview of scales, chords, and key signatures." },
            { title: "Composing Melodies", description: "Learn how to create simple musical compositions." }
        ],
        instructor: {
            name: "John Taylor",
            bio: "Professional composer and music teacher with 15 years of experience.",
            imageUrl: "IMAGES/instructor11.jpg"
        },
        reviews: [
            { author: "William Johnson", date: "September 15, 2024", text: "Great course for beginners interested in music theory." }
        ],
        price: 180,
        duration: "4 weeks"
    },
    {
        courseCode: "ENG301",
        title: "Creative Writing: Crafting Your Story",
        category: "Writing",
        subCategory: "Creative Writing",
        price: 220,
        popularity: 87,
        description: "Learn how to develop compelling stories and improve your creative writing skills.",
        imageUrl: "IMAGES/course12.jpg",
        
        objectives: [
            "Understand narrative structure",
            "Learn character development techniques",
            "Improve your writing style and voice"
        ],
        curriculum: [
            { title: "Story Structure", description: "Learn the key elements of narrative storytelling." },
            { title: "Character Development", description: "Explore techniques for creating dynamic characters." }
        ],
        instructor: {
            name: "Laura Anderson",
            bio: "Published author with experience in both fiction and non-fiction writing.",
            imageUrl: "IMAGES/instructor12.jpg"
        },
        reviews: [
            { author: "Isabella Clark", date: "October 3, 2024", text: "A helpful course for anyone looking to write creatively." }
        ],
        price: 200,
        duration: "5 weeks"
    }
];

// Categories and Sub-categories Data
const categories = [
    {
        name: "Commerce",
        subCategories: ["Business Fundamentals", "Accounting"]
    },
    {
        name: "Mathematics",
        subCategories: ["Calculus", "Statistics"]
    },
    {
        name: "Technology",
        subCategories: ["Artificial Intelligence", "Programming", "Cybersecurity"]
    },
    {
        name: "Marketing",
        subCategories: ["Digital Marketing", "Branding"]
    },
    {
        name: "Design",
        subCategories: ["Graphic Design", "Web Design"]
    }
];