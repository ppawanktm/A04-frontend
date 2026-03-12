import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <div className="h-16 bg-white flex justify-end border-b border-gray-300">
      <div className="h-full flex items-center bg-[#E5E7EB] px-8">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
      <div className="h-full flex items-center bg-[#F3EFE0] px-6">
        <img src="/img/logo.png" className="h-10 w-auto" alt="logo" />
      </div>
    </div>
  );
}