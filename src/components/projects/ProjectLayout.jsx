const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ name, description }) => {
  return (
    <div
      variants={item}
      className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-foreground text-xl">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectLayout;
