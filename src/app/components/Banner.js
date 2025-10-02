import Image from "next/image";

const Banner = () => {

  const bannerImgs = ['DeltaBanner.png', 'OffBanner.png', 'IbBanner.png', 'OmoriBanner.png']

  return (
    <div className="w-full mb-7 border-2 h-[200px] rounded-3xl border-black bg-fuchsia-500 flex justify-items-center overflow-hidden">
      <Image src={"/assets/sunny.jpg"} width={1000} height={50} alt="snuuy" />
    </div>
  );
};

export default Banner;
