import Image from "next/image";

const AvatarStack = () => {
  return (
    <div className="container-center gap-10">
      <div className="container-center">
        <div className="container-center translate-x-7">
          {avatars.map((avatar, key) => (
            <Image
              key={key}
              src={avatar}
              alt="avatar"
              width={90}
              height={90}
              className="-ml-16 rounded-full border-4 border-dark max-md:h-[80px] max-md:w-[80px]"
            />
          ))}
        </div>
      </div>
      <div className="container-start-v text-4xl max-md:text-3xl text-start text-secondary">
        850+ <br /> Members
      </div>
    </div>
  );
};

const avatars: string[] = [
  "/testimonials/3.webp",
  "/testimonials/1.webp",
  "/testimonials/2.webp",
  "/testimonials/4.webp",
];

export default AvatarStack;
