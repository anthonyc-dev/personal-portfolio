import ScrollVelocity from "../ScrollVelocity";

const ScrollVelocitySection = () => {
  return (
    <section className="py-24">
      <ScrollVelocity
        texts={["Building Scalable Solutions", "Solutions That Drive Results"]}
        velocity={100}
        className="custom-scroll-text"
      />
    </section>
  );
};

export default ScrollVelocitySection;
