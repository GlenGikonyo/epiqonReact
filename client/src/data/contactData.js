const contactData = [
    {
      title: "address",
      icon: "/src/assets/images/icon-location.svg",
      content: ["Nairobi, Kenya", "Hemak Plaza, 3rd Floor"],
      image: "/src/assets/images/contact-info-1.jpg",
      delay: "0.25s",
    },
    {
      title: "call now",
      icon: "/src/assets/images/icon-phone.svg",
      content: ["0780181834", "0702770914"],
      image: "/src/assets/images/contact-info-2.jpg",
      delay: "0.5s",
    },
    {
      title: "email us",
      icon: "src/assets/images/icon-mail.svg",
      content: ["info@epiqonsolutions.co ke",],
      image: "/src/assets/images/contact-info-3.jpg",
      delay: "0.75s",
    },
  ];

  export default contactData;
// This code defines an array of contact information objects, each containing a title, icon, content (which is an array of strings), an image path, and a delay for animations. This data can be used to populate a contact page with various contact methods such as address, phone number, and email. Each object can be rendered in a component to display the contact information dynamically.
// The contactData array can be imported and used in a React component to display contact information dynamically, such as in a Contact Us page. Each object in the array represents a different method of contact, including address, phone number, and email, along with associated icons and images for visual representation.
