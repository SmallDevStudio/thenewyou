import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-full justify-center items-center">
        <Image
          src="/img/1.jpg"
          alt="Picture of the author"
          width={700}
          height={700}
          priority
        />
        <Image
          src="/img/2.jpg"
          alt="Picture of the author"
          width={700}
          height={700}
          priority
        />
        <Image
          src="/img/3.jpg"
          alt="Picture of the author"
          width={700}
          height={700}
          className="ml-[-15px]"
          priority
        />
      </div>
    </div>
  );
}
