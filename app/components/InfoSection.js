import Image from 'next/image';

export default function InfoSection() {
  console.log('InfoSection rendering');
  return (
    <div className="col-span-2 min-h-screen flex items-center justify-center py-32 info-section">
      <div className="grid grid-cols-2 gap-x-8 w-full max-w-7xl">
        <div className="relative w-full">
          <Image
            src="/profile-image.jpg"  // You'll need to add your profile image
            alt="Majkel Kokocinski"
            width={800}
            height={600}
            className="w-auto h-auto"
            priority
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="text-sm mb-8">Majkel Kokocinski - Art Direction, Frontend Dev. & Graphic Design</h2>
          <p className="text-sm mb-8">
            Stockholm based Maison Majkel Kokocinski blends creative direction,
            strategic insight, and execution to offer seamless design solutions.
            &apos;Maison&apos; reflects the collaborative spirit within the design studio
            - with access to a vast network of technologists/specialists when
            required. This portfolio features a selection of work completed
            between 2016 - 2024.
          </p>
          <div className="text-sm">
            <p>majkelkokocinski@gmail.com</p>
            <p>+46 76 052 60 05</p>
          </div>
        </div>
      </div>
    </div>
  );
}
