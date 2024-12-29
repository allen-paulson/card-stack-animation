import CardWrapper from "@/components/CardWrapper";

export default function Home() {
  return (
    <>
      <div className="container h-svh grid place-content-center">
        <h1 className="text-5xl">
          Card stacking animation using framer motion.
        </h1>
      </div>
      <div className="conatiner">
        <CardWrapper />
      </div>
    </>
  );
}
