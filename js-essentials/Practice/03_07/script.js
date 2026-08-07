/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const course = {
    name: "Media & Broadcast Essentials for the Software Industry",
    description: "This course is designed to provide a comprehensive understanding of media and broadcast essentials for professionals in the software industry. It covers key concepts, tools, and techniques used in media production and broadcasting.",
    duration: "6 weeks",
    level: "Intermediate",
    modules: [
        {
            title: "Introduction to Media & Broadcast",
            topics: ["Media Fundamentals", "Broadcasting Basics", "Industry Overview"]
        },
        {
            title: "Media Production Techniques",
            topics: ["Video Production", "Audio Production", "Editing and Post-Production"]
        },
        {
            title: "Broadcasting Technologies",
            topics: ["Streaming Protocols", "Content Delivery Networks", "Broadcast Equipment"]
        }
    ],
    instructor: {
        name: "John Doe",
        experience: "10 years in media production and broadcasting",
        contact: {
            email: "john.doe@example.com",
            phone: "+1 (555) 123-4567"
        }
    },
    enrollment: {
        startDate: "2024-07-01",
        endDate: "2024-08-12",
        capacity: 30,
        enrolledStudents: 25
    },
    enrollmentOpen: true,
    changeEnrollmentStatus: function (status) {
        this.enrollmentOpen = status;
    }
};

console.log(course.enrollmentOpen);