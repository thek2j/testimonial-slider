const testimonials = [
  {
    name: "Daniel Mercer",
    imgURL:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "From FaceTime meetings to cloud-based note syncing, the iPhone empowers me to run my business wherever I am. It's indispensable.",
  },

  {
    name: "John Doe",
    imgURL:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The iPhone's reliability and user-centric design have streamlined my daily workflow. Its ecosystem integration is second to none.",
  },

  {
    name: "Jane Smith",
    imgURL:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "As a content creator, I rely on the iPhone's camera and editing capabilities to produce high-quality videos on the go. It's a game-changer.",
  },

  {
    name: "Natalie Chen",
    imgURL:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The iPhone's seamless integration with my other Apple devices makes it easy to switch between tasks. It's a powerful tool for productivity.",
  },

  {
    name: "Michael Brown",
    imgURL:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The performance and security of the iPhone make it my go-to device for business communication and sensitive data management. I trust it completely.",
  },

  {
    name: "Emily Davis",
    imgURL:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The iPhone's ecosystem makes switching between my MacBook and iPhone completely frictionless. It's built for professionals who value efficiency.",
  },

  {
    name: "David Wilson",
    imgURL:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Battery life, display clarity, and camera quality—every aspect of the iPhone feels polished and thoughtfully designed. It's a joy to use.",
  },

  {
    name: "Marcus Zhang",
    imgURL:
      "https://images.unsplash.com/photo-1726722886957-2ed42b15aaa3?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Every iPhone upgrade brings meaningful enhancements, especially in performance and privacy—two things I value highly.",
  },
];

let index = 0;

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

function updateTestimonial() {
  const { name, imgURL, text } = testimonials[index];

  imageEl.src = imgURL;
  textEl.innerText = text;
  nameEl.innerText = name;
  index++;

  if (index >= testimonials.length) {
    index = 0;
  }
}

updateTestimonial();

setInterval(updateTestimonial, 10000); //
