import { resortData } from "@/app/data/stackingCardData";
import Card from "../Card/Card";

const CardWrapper = () => {
  return (
    <section className="bg-blue-50">
      <div className="container py-20">
        <h2 className="text-center text-blue-400 text-4xl font-medium tracking-tight mb-16">
          {resortData.title}{" "}
          {resortData.highlights.map((data, i) => (
            <span key={i} className={`font-semibold text-blue-600`}>
              {data.word}.{" "}
            </span>
          ))}
        </h2>
        {resortData.highlights.map((data, id) => (
          <Card key={id} {...data.card} />
        ))}
      </div>
    </section>
  );
};

export default CardWrapper;
