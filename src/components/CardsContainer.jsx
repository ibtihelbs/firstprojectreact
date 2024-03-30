import React from "react";
import SingleCard from "./Card";
import { Container } from "react-bootstrap";
const products = [
  {
    title: "Wireless Headphones",
    description:
      "Experience immersive sound quality with our wireless headphones. Enjoy the freedom of movement without compromising on audio performance.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Smartphone",
    description:
      "Stay connected and productive with our latest smartphone. Packed with powerful features and a stunning display, it's your perfect companion.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Fitness Tracker",
    description:
      "Achieve your fitness goals with our advanced fitness tracker. Monitor your activity levels, heart rate, and more, all in one sleek device.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Coffee Maker",
    description:
      "Start your day with the perfect cup of coffee. Our coffee maker delivers rich, flavorful brews with customizable settings for your preference.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Bluetooth Speaker",
    description:
      "Bring the party anywhere with our portable Bluetooth speaker. Enjoy high-quality sound and convenient wireless connectivity.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Laptop",
    description:
      "Power through tasks with ease using our high-performance laptop. Whether for work or play, it offers seamless performance and stunning visuals.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Digital Camera",
    description:
      "Capture life's moments in stunning detail with our digital camera. From family gatherings to outdoor adventures, never miss a shot.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Smartwatch",
    description:
      "Stay connected and organized on the go with our smartwatch. Get notifications, track your fitness, and more, all from your wrist.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Portable Charger",
    description:
      "Never run out of battery again with our portable charger. Compact and powerful, it's the perfect companion for your mobile devices.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
];

const CardsContainer = () => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {products.map((v, i) => (
        <SingleCard key={i} prod={v} />
      ))}
    </Container>
  );
};

export default CardsContainer;
